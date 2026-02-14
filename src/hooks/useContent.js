import { useState, useEffect } from 'react';
import { pageStructures } from '../admin/pageStructures';

export function useContent(pageId) {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch(`/api/content/${pageId}`);
                if (!res.ok) throw new Error('Failed to fetch');

                const data = await res.json();

                // Fallback to initial structure if DB is empty
                // In a real app we might want to deep merge, but for now:
                const initial = pageStructures[pageId] || {};
                setContent(data || initial);
            } catch (err) {
                console.warn(`Could not load content for ${pageId}, using fallback.`);
                setContent(pageStructures[pageId] || {});
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [pageId]);

    return { content, loading };
}
