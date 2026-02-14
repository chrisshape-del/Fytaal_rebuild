export async function onRequestGet({ env }) {
    const listing = await env.MEDIA.list();
    return new Response(JSON.stringify(listing.objects), {
        headers: { "Content-Type": "application/json" }
    });
}

export async function onRequestPost({ request, env }) {
    const formData = await request.formData();
    const file = formData.get("file");
    const key = file.name;

    await env.MEDIA.put(key, file);

    return new Response(JSON.stringify({ key, url: `/media/${key}` }), { // Local simulation path
        headers: { "Content-Type": "application/json" }
    });
}

export async function onRequestDelete({ request, env }) {
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (!key) return new Response("Missing key", { status: 400 });

    await env.MEDIA.delete(key);

    return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" }
    });
}
