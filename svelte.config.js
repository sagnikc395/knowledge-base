import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				_: path.join(process.cwd(), 'src/lib/components/MarkdownLayout.svelte')
			},
			remarkPlugins: [remarkUnwrapImages, remarkMath],
			rehypePlugins: [
				[
					rehypeKatex,
					{
						// This is crucial: it prevents Svelte from interpreting
						// LaTeX curly braces {} as Svelte expressions
						trust: true,
						strict: false
					}
				]
			]
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		alias: {
			$posts: 'src/posts'
		},
		paths: {
			base: ''
		}
	}
};

export default config;
