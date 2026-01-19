import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Component } from 'svelte';

export const load: PageLoad = async ({ params }) => {
	// Use import.meta.glob to get all markdown files
	const modules = import.meta.glob('/src/posts/**/*.md');

	// Construct the key that matches the glob pattern
	let slug = params.slug;
	if (slug.endsWith('/')) {
		slug = slug.slice(0, -1);
	}
	slug = decodeURIComponent(slug);

	const key = `/src/posts/${slug}.md`;

	type MarkdownModule = {
		default: Component;
		metadata: Record<string, unknown>;
	};

	if (key in modules) {
		const post = (await modules[key]()) as MarkdownModule;
		return {
			content: post.default,
			meta: post.metadata
		};
	}

	console.error(`Failed to find note for slug: "${params.slug}". Tried key: "${key}"`);
	throw error(404, `Note not found: ${params.slug}`);
};
