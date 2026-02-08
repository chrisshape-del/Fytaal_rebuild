export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // Attempt to fetch the request from the assets binding
        let response = await env.ASSETS.fetch(request);

        // If the request resulted in a 404, this might be an SPA route.
        // We only fallback to index.html if it's NOT a request for an asset (like css, js, images).
        // Adjust the condition as needed, e.g., check for file extensions.
        if (response.status === 404 && !url.pathname.startsWith('/assets/')) {
            // Fetch index.html to support SPA routing
            const indexResponse = await env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request));
            return new Response(indexResponse.body, {
                headers: indexResponse.headers,
                status: 200
            });
        }

        return response;
    }
};
