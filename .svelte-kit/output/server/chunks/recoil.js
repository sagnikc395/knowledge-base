import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
const metadata = {
  "title": "State Management using Recoil",
  "tags": ["react", "state-management", "recoil"],
  "date": "2/15/26"
};
const { title, tags, date } = metadata;
function Recoil_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<h3>context, state management and recoil</h3> <ul><li></li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Recoil_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_8 as _
};
