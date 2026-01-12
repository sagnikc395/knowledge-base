import type { Post } from '$lib/types';

export async function getPosts(): Promise<Post[]> {
    const posts: Post[] = [];

    // Search all subdirectories for markdown files
    const paths = import.meta.glob('/src/posts/**/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        
        // Transform path: "/src/posts/dev/rust/intro.md" -> "dev/rust/intro"
        const slug = path
            .replace('/src/posts/', '')
            .replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file) {
            const metadata = file.metadata as Omit<Post, 'slug' | 'category'>;
            
            // Extract category (first folder name)
            const category = slug.split('/')[0];

            const post = { 
                ...metadata, 
                slug, 
                category 
            } satisfies Post;

            // Only add if it's not a template or README (optional filter)
            if (post.published && !slug.includes('templates/')) {
                posts.push(post);
            }
        }
    }

    return posts.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}