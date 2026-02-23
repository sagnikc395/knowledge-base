// @ts-nocheck
import { getPosts } from '$lib/utils';
import fs from 'fs';
import path from 'path';
import type { PageServerLoad } from './$types';

export const load = async () => {
    const posts = await getPosts();
    const nodes = posts.map(p => ({
        id: p.slug,
        title: p.title,
        category: p.category,
        // We can add radius or color logic in the frontend based on connections or category
    }));

    const links: { source: string; target: string }[] = [];
    const slugSet = new Set(posts.map(p => p.slug));

    for (const post of posts) {
        // Construct physical file path. 
        // Note: slugs mirror the folder structure inside src/posts
        const filePath = path.join(process.cwd(), 'src', 'posts', `${post.slug}.md`);
        
        try {
            if (!fs.existsSync(filePath)) {
                // Try finding it if it might be an index file or similar, but utils.ts guarantees these exist
                // However, utils.ts logic: slug = path.replace('/src/posts/', '').replace('.md', '')
                // So src/posts/dev/rust.md -> dev/rust
                // src/posts/dev/rust/index.md -> dev/rust/index
                // If the user uses index.md for folders, my resolver needs to match.
                // Based on utils.ts, the slug includes 'index' if the file is index.md.
                continue;
            }

            const content = fs.readFileSync(filePath, 'utf-8');
            
            // Regex for Markdown links: [text](url)
            // We ignore images which usually start with !
            const linkRegex = /(?<!\!)\[([^\]]+)\]\(([^)]+)\)/g;
            let match;

            while ((match = linkRegex.exec(content)) !== null) {
                const url = match[2];
                
                // Skip external links, anchors, and mailto
                if (url.startsWith('http') || url.startsWith('#') || url.startsWith('mailto:')) continue;

                let targetSlug = '';

                if (url.startsWith('/notes/')) {
                    // Absolute path in the site structure: /notes/category/slug
                    targetSlug = url.replace(/^\/notes\//, '');
                } else if (!url.startsWith('/')) {
                    // Relative path handling
                    const currentDir = path.dirname(post.slug);
                    
                    // Use path.posix to ensure forward slashes are used for slugs, 
                    // independent of the OS file system (though we are on darwin which is posix-like)
                    // This is safer for URL/Slug manipulation.
                    const resolved = path.posix.normalize(path.posix.join(currentDir, url));
                    targetSlug = resolved;
                } else {
                     // Starts with / but not /notes/ - assume it's root relative to website, 
                     // maybe it points to static assets or other pages. Ignore for now unless we know structure.
                     // If it's just /slug, we can try it.
                     // But usually content links are /notes/...
                     continue;
                }

                // Clean up trailing .md, .html, query params, hashes
                targetSlug = targetSlug.replace(/(\.md|\.html)$/, '').replace(/[?#].*$/, '');

                if (slugSet.has(targetSlug) && targetSlug !== post.slug) {
                    links.push({ source: post.slug, target: targetSlug });
                }
            }
        } catch (e) {
            console.error(`Failed to read or parse file for slug ${post.slug}:`, e);
        }
    }

    return {
        nodes,
        links
    };
};
;null as any as PageServerLoad;