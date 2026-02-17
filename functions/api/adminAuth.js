import { parse, serialize } from 'cookie';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export async function onRequestPost({ request, env }) {
    try {
        const body = await request.json();
        const action = body.action;
        const password = body.password;
        const newPassword = body.newPassword;

        const cookieHeader = request.headers.get('Cookie') || '';
        const cookies = parse(cookieHeader);

        // --- 1. INITIAL SETUP CHECK ---
        // Check if any admin user exists. If not, create one.
        const usersList = await env.DB.prepare('SELECT * FROM AdminUser LIMIT 1').first();
        if (!usersList) {
            const hashedPassword = await bcrypt.hash("JouwInitieleWachtwoord", 10);
            await env.DB.prepare(
                'INSERT INTO AdminUser (id, username, password_hash, must_change_password) VALUES (?, ?, ?, ?)'
            )
                .bind(uuidv4(), 'admin', hashedPassword, 1) // 1 for true
                .run();
        }

        // --- 2. LOGIN LOGIC ---
        if (action === 'login') {
            const adminUser = await env.DB.prepare('SELECT * FROM AdminUser WHERE username = ?').bind('admin').first();

            if (!adminUser) {
                return new Response(JSON.stringify({ error: 'System error: No admin user found' }), { status: 500 });
            }

            const isValid = await bcrypt.compare(password, adminUser.password_hash);

            if (isValid) {
                // Create Session
                const sessionId = uuidv4();
                // Expire in 24 hours
                // Use ISO string for SQLite
                const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

                await env.DB.prepare('INSERT INTO Sessions (id, user_id, expires_at) VALUES (?, ?, ?)')
                    .bind(sessionId, adminUser.id, expiresAt)
                    .run();

                const authCookie = serialize('auth_session', sessionId, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production', // Secure in production
                    sameSite: 'lax',
                    path: '/',
                    maxAge: 60 * 60 * 24 // 24 hours
                });

                return new Response(JSON.stringify({
                    success: true,
                    must_change_password: adminUser.must_change_password === 1
                }), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Set-Cookie': authCookie
                    }
                });
            }

            return new Response(JSON.stringify({ error: 'Onjuist wachtwoord' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // --- 3. CHANGE PASSWORD LOGIC ---
        if (action === 'changePassword') {
            // AUTH CHECK: Must have a valid session to change password
            const sessionId = cookies.auth_session;

            if (!sessionId) {
                return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
            }

            // JOIN Sessions and AdminUser to get user info securely
            const session = await env.DB.prepare(`
                SELECT Sessions.*, AdminUser.id as admin_id 
                FROM Sessions 
                JOIN AdminUser ON Sessions.user_id = AdminUser.id
                WHERE Sessions.id = ? AND Sessions.expires_at > datetime('now')
            `).bind(sessionId).first();

            if (!session) {
                return new Response(JSON.stringify({ error: 'Session expired' }), { status: 401 });
            }

            // Validate new password strength (minimal check)
            if (!newPassword || newPassword.length < 8) {
                return new Response(JSON.stringify({ error: 'Wachtwoord moet minimaal 8 tekens zijn' }), { status: 400 });
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10);

            await env.DB.prepare('UPDATE AdminUser SET password_hash = ?, must_change_password = 0 WHERE id = ?')
                .bind(hashedPassword, session.admin_id)
                .run();

            return new Response(JSON.stringify({ success: true }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({ error: 'Invalid action' }), { status: 400 });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

export async function onRequestGet({ request, env }) {
    try {
        const cookieHeader = request.headers.get('Cookie') || '';
        const cookies = parse(cookieHeader);
        const sessionId = cookies.auth_session;

        if (!sessionId) {
            return new Response(JSON.stringify({ authenticated: false }), { status: 401 });
        }

        const session = await env.DB.prepare(`
            SELECT Sessions.*, AdminUser.username 
            FROM Sessions 
            JOIN AdminUser ON Sessions.user_id = AdminUser.id
            WHERE Sessions.id = ? AND Sessions.expires_at > datetime('now')
        `).bind(sessionId).first();

        if (!session) {
            return new Response(JSON.stringify({ authenticated: false }), { status: 401 });
        }

        return new Response(JSON.stringify({
            authenticated: true,
            user: session.username
        }), {
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
