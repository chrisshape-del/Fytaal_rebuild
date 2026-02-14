export async function onRequestGet({ env, params }) {
    try {
        console.log("GET /api/content/[[path]] params:", JSON.stringify(params));
        // Handle both [id] and [[path]] styles
        let id;
        if (params.path) {
            id = Array.isArray(params.path) ? params.path.join('/') : params.path;
        } else if (params.id) {
            id = params.id;
        }

        console.log("ID:", id);
        if (!id) return new Response(`Missing ID. Params: ${JSON.stringify(params)}`, { status: 400 });

        const stmt = env.DB.prepare("SELECT data FROM Content WHERE id = ?").bind(id);
        const result = await stmt.first();

        if (!result) {
            return new Response(JSON.stringify(null), {
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(result.data, {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

export async function onRequestPost({ request, env, params }) {
    try {
        console.log("POST /api/content/[[path]] params:", JSON.stringify(params));
        let id;
        if (params.path) {
            id = Array.isArray(params.path) ? params.path.join('/') : params.path;
        } else if (params.id) {
            id = params.id;
        }

        console.log("ID:", id);
        if (!id) return new Response(`Missing ID. Params: ${JSON.stringify(params)}`, { status: 400 });

        const data = await request.json();

        await env.DB.prepare(
            "INSERT INTO Content (id, data) VALUES (?1, ?2) ON CONFLICT(id) DO UPDATE SET data = ?2"
        ).bind(id, JSON.stringify(data)).run();

        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
