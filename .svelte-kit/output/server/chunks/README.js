import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
function README_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<p>100xdevs course notes and learning</p>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: README_md
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_1 as _
};
