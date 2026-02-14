export async function onRequest({ env, params, request }) {
    if (request.method !== "GET" && request.method !== "HEAD") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    let key = "";
    if (Array.isArray(params.path)) {
        key = params.path.join('/');
    } else if (typeof params.path === 'string') {
        key = params.path;
    }

    if (!key) {
        return new Response("Missing key", { status: 400 });
    }

    key = decodeURIComponent(key);

    try {
        const object = await env.MEDIA.get(key);

        if (!object) {
            return new Response("Not Found", { status: 404 });
        }

        const headers = new Headers();
        object.writeHttpMetadata(headers);
        headers.set('etag', object.httpEtag);
        // Important: R2 GetObject body is a stream.
        // For HEAD, we don't need body, but creating Response with body is fine (it won't be sent).
        // However, to be efficient for HEAD:
        if (request.method === "HEAD") {
            return new Response(null, { headers });
        }

        return new Response(object.body, {
            headers,
        });

    } catch (err) {
        return new Response(`Error: ${err.message}`, { status: 500 });
    }
}
