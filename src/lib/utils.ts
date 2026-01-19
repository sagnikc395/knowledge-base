import type { Post, TreeNode, FolderNode } from '$lib/types';

export async function getPosts(): Promise<Post[]> {
	const posts: Post[] = [];

	// Search all subdirectories for markdown files
	const paths = import.meta.glob('/src/posts/**/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];

		// Transform path: "/src/posts/dev/rust/intro.md" -> "dev/rust/intro"
		const slug = path.replace('/src/posts/', '').replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as Omit<Post, 'slug' | 'category'>;

			// Extract category (first folder name)
			const category = slug.split('/')[0];

			// Normalize date
			const dateStr = metadata.date;
			let dateObj = new Date(dateStr);
			// Handle DD/MM/YY format if standard parsing fails
			if (isNaN(dateObj.getTime()) && typeof dateStr === 'string') {
				const parts = dateStr.split('/');
				if (parts.length === 3) {
					const day = parseInt(parts[0], 10);
					const month = parseInt(parts[1], 10) - 1;
					let year = parseInt(parts[2], 10);
					if (year < 100) year += 2000;
					dateObj = new Date(year, month, day);
				}
			}

			// Fallback if still invalid
			if (isNaN(dateObj.getTime())) {
				dateObj = new Date();
			}

			const post = {
				...metadata,
				slug,
				category,
				date: dateObj.toISOString()
			} satisfies Post;

			// Only add if it's not a template or README (optional filter)
			// Default published to true if not specified
			const isPublished = post.published ?? true;
			if (isPublished && !slug.includes('templates/') && !slug.endsWith('README')) {
				posts.push(post);
			}
		}
	}

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostTree(): Promise<TreeNode[]> {
	const posts = await getPosts();
	const root: TreeNode[] = [];

	for (const post of posts) {
		const parts = post.slug.split('/');
		let currentLevel = root;

		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			const isLast = i === parts.length - 1;

			if (isLast) {
				currentLevel.push({
					type: 'file',
					name: post.title, // Use title for display if preferred, or part for filename
					post
				});
			} else {
				let folder = currentLevel.find(
					(node): node is FolderNode => node.type === 'folder' && node.name === part
				);

				if (!folder) {
					folder = {
						type: 'folder',
						name: part,
						children: []
					};
					currentLevel.push(folder);
				}

				currentLevel = folder.children;
			}
		}
	}

	function sortTree(nodes: TreeNode[]) {
		nodes.sort((a, b) => {
			if (a.type === b.type) {
				return a.name.localeCompare(b.name);
			}
			return a.type === 'folder' ? -1 : 1;
		});
		nodes.forEach((node) => {
			if (node.type === 'folder') {
				sortTree(node.children);
			}
		});
	}

	sortTree(root);

	return root;
}
