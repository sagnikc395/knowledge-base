import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
const metadata = {
  "title": "Document Object Model",
  "tags": ["DOM", "100xdevs", "frontend"],
  "date": "1/22/26"
};
const { title, tags, date } = metadata;
function Dom_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<ul><li>DOM</li> <li>Overview of DOM <ul><li>JS makes the HTML pages active and dynamic via the DOM.</li> <li>Communicating with the browser via the DOM to respond to events.</li> <li>A programming interface for web documents.</li> <li>DOM is like a tree-like representation of the web page that gets loaded into the browser.</li> <li>DOM represents the document as nodes and objects.</li> <li>Without it, JS wouldnt have any model or notion of web pages, HTML documents, SVG Documents and their component parts.</li> <li>Web API is used to build websites.</li> <li>Language Independent -> made accessible to accessing the structure representation of the document available from a single , consistent API.</li> <li></li></ul></li> <li>How DOM represents an HTML Document in memory</li> <li>How to use APIs to create web content and applications</li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dom_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_4 as _
};
