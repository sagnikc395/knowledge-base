import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	// Use import.meta.glob to get all markdown files
	const modules = import.meta.glob('/src/posts/**/*.md');
	
	// Construct the key that matches the glob pattern
	const key = `/src/posts/${params.slug}.md`;

	if (key in modules) {
		const post = await modules[key]() as { default: any, metadata: any };
		return {
			content: post.default,
			meta: post.metadata
		};
	}

	throw error(404, `Note not found: ${params.slug}`);
};