import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
function Sveltekit_learn_readme_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<p>My notes and stuff while learning Sveltekit and TailwindCSS to make basic personal websites on my own.</p> <h3>Index:</h3> <ol><li>[[svelte-basics]] Covers the Basics of Svelte.</li> <li>[[learn-tailwind]] Covers TailwindCSS and stuff.</li> <li>[[sveltekit]] for everything related to make production grade apps with Svelte and SvelteKit.</li></ol>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sveltekit_learn_readme_md
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_32 as _
};
