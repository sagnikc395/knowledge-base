import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
function Ddia_notes_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<p>my notes and writeups for Designing Data Intensive Applications book.</p> <p>Index:</p> <ul><li>Chapter1 -> introduces the terminology and approach. It examines what we are actually mean by words like reliability,scalability and maintainibility, and how we can try to achieve these goals.</li> <li>Chapter2 -> compares several different data models and query langauges - most visible distinguishing facor bw databases from a developer’s point of view. How different models are appropriate to different situations.</li> <li>Chapter3 -> turns to internals of storage engines and looks at how databases lay out data on disk. Different storage engines are optimized for different workloads, and choosing the right ne can have a huge effect on performance.</li> <li>Chapter4 -> compares various formats for data encoding (serialization) and especially examines how they fare in an env where application requirements change and schemas need to adatpt over time.</li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ddia_notes_md
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_16 as _
};
