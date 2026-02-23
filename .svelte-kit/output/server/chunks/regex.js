import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
const metadata = {
  "title": "Regular Expressions",
  "tags": ["regex", "python"],
  "date": "2/15/26"
};
const { title, tags, date } = metadata;
function Regex_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<ul><li>regular expressions allows us to look and search for specific patterns of text.</li> <li>they can look extremely complicated but thats due to what we can do with them</li> <li>we can create regular expressions with just about any pattern that we can think of.</li> <li>there are some characeters that need to be escaped while searching <ul><li>. is a special characterfor regular expressions</li> <li>for searching for a literal dot, we have to escape using a backslash.</li></ul></li> <li>re module is used for regular expressions in python.</li> <li>raw string is a string in python prefixed with a r. <ul><li>tells python not to handle backslashes in any special way.</li> <li><code>r'\\tTab'</code> is a raw string</li></ul></li> <li><code>re.compile()</code> will allow us to seperate out our patterns and store then in a variable and also reuse the variable for multiple searches.</li> <li></li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Regex_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_25 as _
};
