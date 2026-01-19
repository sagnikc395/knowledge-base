import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import path from 'path';
import { createHighlighter } from 'shiki';

const theme = 'vesper';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'html', 'css', 'svelte', 'shell', 'bash', 'json', 'python', 'go', 'c', 'cpp', 'sql']
});

/**
 * @param {string} str
 * @returns {string}
 */
function escapeSvelte(str) {
	return str
		.replace(/{/g, '&#123;')
		.replace(/}/g, '&#125;');
}

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
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const html = highlighter.codeToHtml(code, { lang, theme });
					return escapeSvelte(html);
				}
			},
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
			fallback: '404.html'
		}),
		paths: {
			base: process.env.BASE_PATH || ''
		},
		alias: {
			$posts: 'src/posts'
		},
	}
};

export default config;
