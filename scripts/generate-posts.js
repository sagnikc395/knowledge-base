import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.resolve(__dirname, '../src/posts');
const outputFile = path.resolve(__dirname, '../src/lib/posts.json');

async function getFiles(dir) {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return Array.prototype.concat(...files);
}

async function generate() {
    const files = await getFiles(postsDir);
    const mdFiles = files.filter(f => f.endsWith('.md') && !f.includes('templates/') && !f.endsWith('README.md'));
    
    // Create static/images/posts directory
    const staticImagesDir = path.resolve(__dirname, '../static/images/posts');
    await fs.ensureDir(staticImagesDir);

    const posts = mdFiles.map(file => {
        let content = fs.readFileSync(file, 'utf-8');
        const { data, content: body } = matter(content);
        const slug = path.relative(postsDir, file).replace('.md', '');
        const category = slug.split('/')[0];
        const postDir = path.dirname(file);

        // Handle images: both ![]() and ![[ ]]
        let processedBody = body;

        // 1. Handle ![[ ]] syntax
        processedBody = processedBody.replace(/!\[\[(.*?)\]\]/g, (match, filename) => {
            const possibleImagePath = path.join(postDir, 'imgs', filename);
            if (fs.existsSync(possibleImagePath)) {
                const targetFilename = `${slug.replace(/\//g, '-')}-${filename}`;
                fs.copySync(possibleImagePath, path.join(staticImagesDir, targetFilename));
                return `![${filename}](/images/posts/${targetFilename})`;
            }
            return match;
        });

        // 2. Handle standard ![]() syntax with relative paths
        processedBody = processedBody.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, src) => {
            if (!src.startsWith('http') && !src.startsWith('/')) {
                const possibleImagePath = path.resolve(postDir, src);
                if (fs.existsSync(possibleImagePath)) {
                    const filename = path.basename(src);
                    const targetFilename = `${slug.replace(/\//g, '-')}-${filename}`;
                    fs.copySync(possibleImagePath, path.join(staticImagesDir, targetFilename));
                    return `![${alt}](/images/posts/${targetFilename})`;
                }
            }
            return match;
        });
        
        return {
            title: data.title || path.basename(file, '.md'),
            date: data.date || new Date().toISOString(),
            slug,
            category,
            published: data.published !== false,
            content: processedBody,
            metadata: data
        };
    }).filter(p => p.published);

    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    await fs.outputJson(outputFile, posts, { spaces: 2 });
    console.log(`Generated ${posts.length} posts to ${outputFile}`);
}

generate().catch(console.error);
