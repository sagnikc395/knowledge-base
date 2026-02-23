import { g as getPosts } from "../../../chunks/utils2.js";
import fs from "fs";
import path from "path";
const load = async () => {
  const posts = await getPosts();
  const nodes = posts.map((p) => ({
    id: p.slug,
    title: p.title,
    category: p.category
    // We can add radius or color logic in the frontend based on connections or category
  }));
  const links = [];
  const slugSet = new Set(posts.map((p) => p.slug));
  for (const post of posts) {
    const filePath = path.join(process.cwd(), "src", "posts", `${post.slug}.md`);
    try {
      if (!fs.existsSync(filePath)) {
        continue;
      }
      const content = fs.readFileSync(filePath, "utf-8");
      const linkRegex = /(?<!\!)\[([^\]]+)\]\(([^)]+)\)/g;
      let match;
      while ((match = linkRegex.exec(content)) !== null) {
        const url = match[2];
        if (url.startsWith("http") || url.startsWith("#") || url.startsWith("mailto:")) continue;
        let targetSlug = "";
        if (url.startsWith("/notes/")) {
          targetSlug = url.replace(/^\/notes\//, "");
        } else if (!url.startsWith("/")) {
          const currentDir = path.dirname(post.slug);
          const resolved = path.posix.normalize(path.posix.join(currentDir, url));
          targetSlug = resolved;
        } else {
          continue;
        }
        targetSlug = targetSlug.replace(/(\.md|\.html)$/, "").replace(/[?#].*$/, "");
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
export {
  load
};
