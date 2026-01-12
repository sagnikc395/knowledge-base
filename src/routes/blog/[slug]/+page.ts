import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    try {
        // params.slug will be "dev/ui-dev/sveltekit"
        const post = await import(`../../../posts/${params.slug}.md`);

        return {
            content: post.default,
            meta: post.metadata
        };
    } catch (e) {
        console.error(e);
        throw error(404, `Post not found: ${params.slug}`);
    }
};