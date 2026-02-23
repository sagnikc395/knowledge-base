import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
const metadata = {
  "title": "Skeleton of Svelte Projects",
  "tags": ["svelte", "ui", "npm"],
  "date": "31/5/25"
};
const { title, tags, date } = metadata;
function Skeleton_of_svelte_projects_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<h2>Skeleton of a Svelte Project</h2> <ul><li>routes -> +page.svelte; main page that gets loaded for the first time.</li></ul> <h2>First bit of svelte code:</h2> <ul><li>&lt;\\script> -> where we do our imports, setup our js and setup our state.</li> <li>create our own svelte file:</li> <li>inside the routes folders.</li></ul> - Component name convention is to use a uppercase named file -> not necessary but use it like that.
- There are techniques which we can use snippets to share code , but for the most part, we are using a single file component -> whatever we write in that file ends up being scoped to that component and that component only. <h2>Props:</h2> <ul><li>variables when we pass something from a variable to a component.</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">Header</span><span style="color:#A0A0A0"> prop</span><span style="color:#FFF">=</span><span style="color:#A0A0A0">{</span><span style="color:#FFF">prop_value</span><span style="color:#A0A0A0">}</span><span style="color:#A0A0A0"> /></span></span></code></pre> <ul><li>It means that we can pass one thing down from another. Very common way to pass information from component to component.</li> <li>Anything inside brackets is a variable and is a JS expression that can be used anywhere.</li></ul> <h2>Syntax Highlighting</h2> <ul><li>Svelte for VSCode extension.</li></ul> <h2>defining types in Svelte</h2> <ul><li>pretty similar to how we would use in normal typescript in a variable.</li> <li>$ in svelte is called runes. eg: $props() to define props, $state() to define a state.</li></ul> <h2>state in svelte</h2> <ul><li>state was previously a value in Svelte.</li> <li>In would be dynamically and changed reactivally depending on the state changes on that.</li> <li>In Svelte5 they have introduced runes. In previous svelte it was hard to track which variables were changing and which were not and how they were changing.</li> <li>$state can be set a default value and due to type suggestions can infer the type.</li> <li>In Svelte we update the variable itself and that itself triggers the reactivity , there is no .setState specifically to make those changes.</li></ul> <h2>other states</h2> <ul><li>can get into other different scenarios with different types of states.</li> <li>value and another value that depends on another value -> reactive state.</li> <li>$derive() value is gonna be always be in sync -> state value that will always be in sync along with state.</li> <li>Also in a single file, we can only use props just once.</li> <li>frozenstate</li> <li>derivedstate</li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Skeleton_of_svelte_projects_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_26 as _
};
