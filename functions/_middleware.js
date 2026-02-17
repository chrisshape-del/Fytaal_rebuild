export async function onRequest(context) {
    // TEMPORARY: Allow all requests without auth
    return context.next();
}
