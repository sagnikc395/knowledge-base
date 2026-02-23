import { _ as __vite_glob_0_0 } from "./JS-Fundamentals.js";
import { _ as __vite_glob_0_1 } from "./README.js";
import { _ as __vite_glob_0_2 } from "./backend-basics-2.js";
import { _ as __vite_glob_0_3 } from "./backend-basics.js";
import { _ as __vite_glob_0_4 } from "./dom.js";
import { _ as __vite_glob_0_5 } from "./html-css-fundamentals.js";
import { _ as __vite_glob_0_6 } from "./mongo-in-depth.js";
import { _ as __vite_glob_0_7 } from "./react.js";
import { _ as __vite_glob_0_8 } from "./recoil.js";
import { _ as __vite_glob_0_9 } from "./taste is the new moat.js";
import { _ as __vite_glob_0_10 } from "./typescript.js";
import { _ as __vite_glob_0_11 } from "./README2.js";
import { _ as __vite_glob_0_12 } from "./catching-upto-transformers.js";
import { _ as __vite_glob_0_13 } from "./neural-networks-from-scratch.js";
import { _ as __vite_glob_0_14 } from "./transformers.js";
import { _ as __vite_glob_0_15 } from "./Shells and Terminals.js";
import { _ as __vite_glob_0_16 } from "./ddia-notes.js";
import { _ as __vite_glob_0_17 } from "./reliable-scalable-maintainable-applications.js";
import { _ as __vite_glob_0_18 } from "./lec1.js";
import { _ as __vite_glob_0_19 } from "./kai.js";
import { _ as __vite_glob_0_20 } from "./knowl.js";
import { _ as __vite_glob_0_21 } from "./realtime-data-streaming.js";
import { _ as __vite_glob_0_22 } from "./Functional Programming.js";
import { _ as __vite_glob_0_23 } from "./Object Oriented Programming in Python.js";
import { _ as __vite_glob_0_24 } from "./Python From Scratch.js";
import { _ as __vite_glob_0_25 } from "./regex.js";
import { _ as __vite_glob_0_26 } from "./skeleton of svelte projects.js";
import { _ as __vite_glob_0_27 } from "./svelte-basics.js";
import { _ as __vite_glob_0_28 } from "./svelte-events.js";
import { _ as __vite_glob_0_29 } from "./svelte-logic.js";
import { _ as __vite_glob_0_30 } from "./svelte-props.js";
import { _ as __vite_glob_0_31 } from "./svelte-reactivity.js";
import { _ as __vite_glob_0_32 } from "./sveltekit-learn-readme.js";
import { _ as __vite_glob_0_33 } from "./sveltekit.js";
import { _ as __vite_glob_0_34 } from "./chapter.js";
async function getPosts() {
  const posts = [];
  const paths = /* @__PURE__ */ Object.assign({ "/src/posts/100xdevs/JS-Fundamentals.md": __vite_glob_0_0, "/src/posts/100xdevs/README.md": __vite_glob_0_1, "/src/posts/100xdevs/backend-basics-2.md": __vite_glob_0_2, "/src/posts/100xdevs/backend-basics.md": __vite_glob_0_3, "/src/posts/100xdevs/dom.md": __vite_glob_0_4, "/src/posts/100xdevs/html-css-fundamentals.md": __vite_glob_0_5, "/src/posts/100xdevs/mongo-in-depth.md": __vite_glob_0_6, "/src/posts/100xdevs/react.md": __vite_glob_0_7, "/src/posts/100xdevs/recoil.md": __vite_glob_0_8, "/src/posts/100xdevs/taste is the new moat.md": __vite_glob_0_9, "/src/posts/100xdevs/typescript.md": __vite_glob_0_10, "/src/posts/README.md": __vite_glob_0_11, "/src/posts/ai-ml-bootcamp/catching-upto-transformers.md": __vite_glob_0_12, "/src/posts/ai-ml-bootcamp/neural-networks-from-scratch.md": __vite_glob_0_13, "/src/posts/ai-ml-bootcamp/transformers.md": __vite_glob_0_14, "/src/posts/data-engineering-zoomcamp/Shells and Terminals.md": __vite_glob_0_15, "/src/posts/data-engineering-zoomcamp/ddia/ddia-notes.md": __vite_glob_0_16, "/src/posts/data-engineering-zoomcamp/ddia/reliable-scalable-maintainable-applications.md": __vite_glob_0_17, "/src/posts/data-engineering-zoomcamp/lec1.md": __vite_glob_0_18, "/src/posts/projects/kai.md": __vite_glob_0_19, "/src/posts/projects/knowl.md": __vite_glob_0_20, "/src/posts/projects/realtime-data-streaming.md": __vite_glob_0_21, "/src/posts/python-refresher/Functional Programming.md": __vite_glob_0_22, "/src/posts/python-refresher/Object Oriented Programming in Python.md": __vite_glob_0_23, "/src/posts/python-refresher/Python From Scratch.md": __vite_glob_0_24, "/src/posts/python-refresher/regex.md": __vite_glob_0_25, "/src/posts/svelte-notes/skeleton of svelte projects.md": __vite_glob_0_26, "/src/posts/svelte-notes/svelte-basics.md": __vite_glob_0_27, "/src/posts/svelte-notes/svelte-events.md": __vite_glob_0_28, "/src/posts/svelte-notes/svelte-logic.md": __vite_glob_0_29, "/src/posts/svelte-notes/svelte-props.md": __vite_glob_0_30, "/src/posts/svelte-notes/svelte-reactivity.md": __vite_glob_0_31, "/src/posts/svelte-notes/sveltekit-learn-readme.md": __vite_glob_0_32, "/src/posts/svelte-notes/sveltekit.md": __vite_glob_0_33, "/src/posts/templates/chapter.md": __vite_glob_0_34 });
  for (const path in paths) {
    const file = paths[path];
    const slug = path.replace("/src/posts/", "").replace(".md", "");
    if (file && typeof file === "object" && "metadata" in file) {
      const metadata = file.metadata;
      const category = slug.split("/")[0];
      const dateStr = metadata.date;
      let dateObj = new Date(dateStr);
      if (isNaN(dateObj.getTime()) && typeof dateStr === "string") {
        const parts = dateStr.split("/");
        if (parts.length === 3) {
          const day = parseInt(parts[0], 10);
          const month = parseInt(parts[1], 10) - 1;
          let year = parseInt(parts[2], 10);
          if (year < 100) year += 2e3;
          dateObj = new Date(year, month, day);
        }
      }
      if (isNaN(dateObj.getTime())) {
        dateObj = /* @__PURE__ */ new Date();
      }
      const post = {
        ...metadata,
        slug,
        category,
        date: dateObj.toISOString()
      };
      const isPublished = post.published ?? true;
      if (isPublished && !slug.includes("templates/") && !slug.endsWith("README")) {
        posts.push(post);
      }
    }
  }
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
async function getPostTree() {
  const posts = await getPosts();
  const root = [];
  for (const post of posts) {
    const parts = post.slug.split("/");
    let currentLevel = root;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isLast = i === parts.length - 1;
      if (isLast) {
        currentLevel.push({
          type: "file",
          name: post.title,
          // Use title for display if preferred, or part for filename
          post
        });
      } else {
        let folder = currentLevel.find(
          (node) => node.type === "folder" && node.name === part
        );
        if (!folder) {
          folder = {
            type: "folder",
            name: part,
            children: []
          };
          currentLevel.push(folder);
        }
        currentLevel = folder.children;
      }
    }
  }
  function sortTree(nodes) {
    nodes.sort((a, b) => {
      if (a.type === b.type) {
        return a.name.localeCompare(b.name);
      }
      return a.type === "folder" ? -1 : 1;
    });
    nodes.forEach((node) => {
      if (node.type === "folder") {
        sortTree(node.children);
      }
    });
  }
  sortTree(root);
  return root;
}
export {
  getPostTree as a,
  getPosts as g
};
