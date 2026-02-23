import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
function README_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<h2>knowledgebase</h2> <p>My wealth of information and knowledge base.</p> <h3>Directions for use:</h3> <ul><li>Just simply install Obsidian from the package managers/ app stores.</li> <li>Git clone the repo and open the folder as vault in obsidian.</li> <li>Enable community plugins and extensions to load all the extensions and able to read the rich text data.</li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: README_md
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_11 as _
};
