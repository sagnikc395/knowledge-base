import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
const metadata = {
  "title": "Realtime Data Streaming",
  "tags": ["data-engineering", "streaming", "realtime-data-streaming"],
  "date": "2/8/26"
};
const { title, tags, date } = metadata;
function Realtime_data_streaming_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<ul><li>E2E Realtime Data Streaming Project containerzed using Docker.</li> <li>![[Screenshot 2026-02-08 at 5.25.56 PM.png]]</li> <li>using random user generator API to generate random user data.</li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Realtime_data_streaming_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_21 as _
};
