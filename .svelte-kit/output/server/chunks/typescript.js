import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
import { e as escape_html } from "./context.js";
const metadata = {
  "title": "Typescript",
  "tags": ["typescript", "100xdevs"],
  "date": "2/17/26"
};
const { title, tags, date } = metadata;
function Typescript_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<h3>Typescript and Types of Languages</h3> <ul><li>There are various types of languages, there are compiled and loosely typed language.</li> <li>another distinction we can make in languages. <ul><li>Eg: Python,JS -> loosely typed languages , C++, Java -> strongly typed language</li></ul></li> <li>In JS, we not only are able to change the value but also the type. <ul><li>In C++ ,it is not allowed, like integer cannot be assigned to integer.</li></ul></li> <li>Starting out coding, loosely typed projects are easier to learn and there is a lower learning curve and easier to get dopamine hits than statically typed language.</li> <li>In production, however you want very strong type checking and here the compiler will help and let them know if there is a problem with the code. <ul><li>Less runtime errors.</li></ul></li> <li>JS is a great language, but since it doesnt have types , it is not that great for production. <ul><li>TS was introduced as a new language to add types on top of JS.</li></ul></li> <li>Strict syntactical superset of JS that adds type information on top of it.</li> <li>A native JS code , without very strong type checking will almost certainly work with Typescript.</li> <li>How does TS code run ? <ul><li>TS code does not work on your browser. <ul><li>TS never runs at all form line to line, JS is the runtime language.</li></ul></li> <li>TS gets transpiled down to JS. <ul><li>typescript -> tsc -> javascript -> ${escape_html((browser, nodejs))}</li></ul></li> <li>it will do all the static checks , this will give a file that will get run in the browser.</li> <li>tsc compiler is supposed to ensure that there is no type errors in the code.</li> <li>if we have an error in our code, it will fail during compilation.</li></ul></li> <li>TS easy to catch at compile time , and the code does what it is supposed to do.</li> <li><code>tsconfig.json</code> <ul><li>config of our typescript</li> <li><code>target</code> <ul><li>specifies the ECMAScript target version to which the Typescript compiler will compile the Typescript code.</li></ul></li> <li><code>rootDir</code> <ul><li>where should the compiler look for <code>.ts</code> files. Good practice is to keep it in the <code>src</code> folder.</li></ul></li> <li><code>outDir</code> <ul><li>where should the compiler look for spit out <code>.ts</code> files.</li></ul></li> <li><code>noImplicitAny</code> <ul><li>To prevent <code>any</code> use on the codebase.</li></ul></li> <li><code>removeComments</code> <ul><li>Whether or not to include comments in the final <code>js</code> file.</li></ul></li></ul></li> <li><code>tsc -b</code> command to generate the corresponding js files from the ts files.</li> <li>“use strict” is something that makes our code more strict.</li> <li>basic types in typescript: <ul><li>Number</li> <li>string</li> <li>boolean</li> <li>null</li> <li>undefined</li></ul></li> <li>Typescript can do type inference <ul><li>we dont have to always give it a return type each time , typescript compiler knows and can infer it</li></ul></li></ul> <h3>Types and Interfaces:</h3> <ul><li>Interfaces <ul><li>how to assign types to objects ?</li> <li></li></ul></li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Typescript_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_10 as _
};
