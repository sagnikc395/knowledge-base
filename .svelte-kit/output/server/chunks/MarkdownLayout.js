import "clsx";
function MarkdownLayout($$renderer, $$props) {
  let { children } = $$props;
  children($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  MarkdownLayout as M
};
