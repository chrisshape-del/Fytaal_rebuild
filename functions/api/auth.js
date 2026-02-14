export async function onRequestPost({ request }) {
    try {
        const { password } = await request.json();

        if (password === "Doriene") {
            return new Response(JSON.stringify({ success: true }), {
                headers: {
                    "Content-Type": "application/json",
                    "Set-Cookie": "auth=doriene-session; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400"
                }
            });
        }

        return new Response(JSON.stringify({ error: "Invalid password" }), {
            status: 401,
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
    }
}

export async function onRequestDelete() {
    return new Response(JSON.stringify({ success: true }), {
        headers: {
            "Content-Type": "application/json",
            "Set-Cookie": "auth_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0"
        }
    });
}
