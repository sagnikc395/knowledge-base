import { g as getPosts, a as getPostTree } from "../../../chunks/utils2.js";
const load = async () => {
  const posts = await getPosts();
  const tree = await getPostTree();
  return { posts, tree };
};
export {
  load
};
