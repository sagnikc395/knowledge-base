import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import path from 'path';
import { createHighlighter } from 'shiki';
import { visit } from 'unist-util-visit';
import fs from 'fs-extra';

const staticImagesPath = path.join(process.cwd(), 'static/images/posts');

function remarkTransformImages() {
	return (tree, file) => {
		const dir = path.dirname(file.filename);
		const fileDir = path.dirname(path.relative(path.join(process.cwd(), 'src/posts'), file.filename));
		visit(tree, 'text', (node, index, parent) => {
			const wikilinkImageRegex = /!\[\[(.*?)\]\]/g;
			let match;
			let lastIndex = 0;
			const newChildren = [];
			while ((match = wikilinkImageRegex.exec(node.value)) !== null) {
				const imageName = match[1];
				const precedingText = node.value.slice(lastIndex, match.index);
				if (precedingText) {
					newChildren.push({ type: 'text', value: precedingText });
				}

				const imagePath = path.resolve(dir, 'imgs', imageName);
				const newPath = path.join(staticImagesPath, fileDir, imageName);
				fs.ensureDirSync(path.dirname(newPath));
				fs.copySync(imagePath, newPath);

				newChildren.push({
					type: 'image',
					url: path.join('/images/posts', fileDir, imageName),
					alt: imageName.replace(/\.[^/.]+$/, '')
				});
				lastIndex = wikilinkImageRegex.lastIndex;
			}
			if (lastIndex > 0) {
				const trailingText = node.value.slice(lastIndex);
				if (trailingText) {
					newChildren.push({ type: 'text', value: trailingText });
				}
				parent.children.splice(index, 1, ...newChildren);
			}
		});

		visit(tree, 'image', (node) => {
			if (node.url.startsWith('./')) {
				const imagePath = path.resolve(dir, node.url);
				const newPath = path.join(staticImagesPath, fileDir, path.basename(node.url));
				fs.ensureDirSync(path.dirname(newPath));
				fs.copySync(imagePath, newPath);
				node.url = path.join('/images/posts', fileDir, path.basename(node.url));
			}
		});
	};
}

const theme = 'vesper';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: [
		'javascript',
		'typescript',
		'html',
		'css',
		'svelte',
		'shell',
		'bash',
		'json',
		'python',
		'go',
		'c',
		'cpp',
		'sql'
	]
});

/**
 * @param {string} str
 * @returns {string}
 */
function escapeSvelte(str) {
	return str.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
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
			remarkPlugins: [remarkUnwrapImages, remarkMath, remarkTransformImages],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const html = highlighter.codeToHtml(code, {
						lang,
						theme,
						transformers: [
							{
								pre(node) {
									delete node.properties.tabindex;
								}
							}
						]
					});
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
		adapter: adapter(),
		alias: {
			$posts: 'src/posts'
		}
	}
};

export default config;
