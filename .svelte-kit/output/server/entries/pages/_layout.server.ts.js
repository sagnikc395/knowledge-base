import { g as getPosts } from "../../chunks/utils2.js";
const load = async () => {
  const posts = await getPosts();
  const menu = posts.reduce(
    (acc, post) => {
      const cat = post.category || "Uncategorized";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(post);
      return acc;
    },
    {}
  );
  return { menu };
};
export {
  load
};
