export async function onRequest(context) {
    const url = new URL(context.request.url);

    // 1. API requests: pass through
    if (url.pathname.startsWith('/api/')) {
        return context.next();
    }

    // 2. Try validation / pass to next (proxy/asset)
    let response = await context.next();

    // 3. If 404, we want to serve index.html
    if (response.status === 404) {
        // If it looks like a static asset request (has extension), return 404
        if (url.pathname.match(/\.[^/]+$/)) {
            return response;
        }

        // Otherwise, fetch index.html
        try {
            // Fetch from absolute URL of root
            const indexResponse = await context.env.ASSETS.fetch(new URL("/", url));
            if (indexResponse.status === 200) {
                return indexResponse;
            }
        } catch (e) {
            console.error("Failed to fetch index.html fallback for", url.pathname, e);
        }
    }

    return response;
}
