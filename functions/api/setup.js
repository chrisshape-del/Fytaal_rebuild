import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export async function onRequest(context) {
    try {
        // 1. Delete existing admin users to ensure a clean slate
        await context.env.DB.prepare('DELETE FROM AdminUser').run();

        // 2. Generate hash for 'password123'
        const hash = await bcrypt.hash("password123", 10);

        // 3. Insert secure admin user
        await context.env.DB.prepare(
            'INSERT INTO AdminUser (id, username, password_hash, must_change_password) VALUES (?, ?, ?, ?)'
        ).bind(uuidv4(), 'admin', hash, 1).run();

        return new Response("Admin user reset successfully.\n\nUsername: admin\nPassword: password123\n\nGo to /baaslogin to log in.", { status: 200 });
    } catch (e) {
        return new Response("Setup Error: " + e.message, { status: 500 });
    }
}
