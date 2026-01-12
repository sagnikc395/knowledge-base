import { getPosts } from '$lib/utils';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
    const posts = await getPosts();
    
    // Group posts by category for the Tufte sidebar
    const menu = posts.reduce((acc, post) => {
        const cat = post.category || 'Uncategorized';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(post);
        return acc;
    }, {} as Record<string, typeof posts>);

    return { menu };
};