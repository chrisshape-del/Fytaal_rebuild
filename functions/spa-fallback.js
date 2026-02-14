export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/media/')) {
            return env.ASSETS.fetch(request);
        }
        // Serve index.html for all other routes to support SPA
        return env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request));
    }
};
