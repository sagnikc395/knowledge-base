import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
const metadata = {
  "title": "Svelte Props",
  "date": "26/7/25",
  "tags": ["frontend", "svelte", "ui", "props", "state"]
};
const { title, date, tags } = metadata;
function Svelte_props_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<h3>Declaring Props:</h3> <ul><li>In any real application, we’ll need to pass data from one component down to its children.</li> <li>To do that , we need to declare properties, generally shortened to ‘props’.</li> <li>In Svelte, we do that with the <code>$props</code> rune.</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#8B8B8B94">&lt;!--  Nested.svelte --></span></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">	let</span><span style="color:#FFF"> { answer,desc } </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> $</span><span style="color:#FFC799">props</span><span style="color:#FFF">();</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span><span style="color:#FFF">The answer is </span><span style="color:#A0A0A0">{</span><span style="color:#FFF">answer</span><span style="color:#A0A0A0">}&lt;/</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span><span style="color:#FFF">Another </span><span style="color:#A0A0A0">{</span><span style="color:#FFF">desc</span><span style="color:#A0A0A0">}</span><span style="color:#A0A0A0"> &lt;/</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B8B8B94">&lt;!-- --></span></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">	import</span><span style="color:#FFF"> Nested </span><span style="color:#A0A0A0">from</span><span style="color:#99FFE4"> './Nested.svelte'</span><span style="color:#FFF">;</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">Nested</span><span style="color:#A0A0A0"> answer</span><span style="color:#FFF">=</span><span style="color:#A0A0A0">{</span><span style="color:#FFC799">42</span><span style="color:#A0A0A0">}/></span></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">Nested</span><span style="color:#A0A0A0"> answer</span><span style="color:#FFF">=</span><span style="color:#A0A0A0">{</span><span style="color:#FFC799">69</span><span style="color:#A0A0A0">}</span><span style="color:#A0A0A0"> desc</span><span style="color:#FFF">=</span><span style="color:#A0A0A0">{</span><span style="color:#99FFE4">"Some Description"</span><span style="color:#A0A0A0">}</span><span style="color:#A0A0A0"> /></span></span></code></pre> <h3>Default Values:</h3> <ul><li>We can easily specify default values for props in <code>Nested.svelte</code>.</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0"> lang</span><span style="color:#FFF">=</span><span style="color:#99FFE4">"ts"</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">	let</span><span style="color:#FFF"> { answer </span><span style="color:#A0A0A0">=</span><span style="color:#99FFE4"> 'another ans'</span><span style="color:#FFF"> } </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> $</span><span style="color:#FFC799">props</span><span style="color:#FFF">();</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span></code></pre> <ul><li>Now if we add a second component without an answer prop, it will fall back to the default!</li></ul> <h3>Spread Props:</h3> <ul><li>We need not explicitly use all the various properties of the sent object via props.</li> <li>But if the properties of sent props maps to the expected props , we can ‘spread’ them onto the component instead.</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#8B8B8B94">&lt;!-- PackgeInfo.sv--></span></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">	let</span><span style="color:#FFF"> { name, version, description, website } </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> $</span><span style="color:#FFC799">props</span><span style="color:#FFF">();</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#FFF">	The </span><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">code</span><span style="color:#A0A0A0">>{</span><span style="color:#FFF">name</span><span style="color:#A0A0A0">}&lt;/</span><span style="color:#FFC799">code</span><span style="color:#A0A0A0">></span><span style="color:#FFF"> package is </span><span style="color:#A0A0A0">{</span><span style="color:#FFF">description</span><span style="color:#A0A0A0">}</span><span style="color:#FFF">. Download version </span><span style="color:#A0A0A0">{</span><span style="color:#FFF">version</span><span style="color:#A0A0A0">}</span><span style="color:#FFF"> from</span></span>
<span class="line"><span style="color:#A0A0A0">	&lt;</span><span style="color:#FFC799">a</span><span style="color:#A0A0A0"> href</span><span style="color:#FFF">=</span><span style="color:#99FFE4">"https://www.npmjs.com/package/</span><span style="color:#A0A0A0">{</span><span style="color:#FFF">name</span><span style="color:#A0A0A0">}</span><span style="color:#99FFE4">"</span><span style="color:#A0A0A0">></span><span style="color:#FFF">npm</span><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">a</span><span style="color:#A0A0A0">></span><span style="color:#FFF"> and </span><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">a</span><span style="color:#A0A0A0"> href</span><span style="color:#FFF">=</span><span style="color:#A0A0A0">{</span><span style="color:#FFF">website</span><span style="color:#A0A0A0">}></span><span style="color:#FFF">learn more here</span><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">a</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B8B8B94">&lt;!-- App.svelte --></span></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">import</span><span style="color:#FFF"> PackageInfo </span><span style="color:#A0A0A0">from</span><span style="color:#99FFE4"> './PackageInfo.svelte'</span><span style="color:#FFF">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">const</span><span style="color:#FFF"> pkg </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> {</span></span>
<span class="line"><span style="color:#FFF">	name : </span><span style="color:#99FFE4">'svelte'</span><span style="color:#FFF">,</span></span>
<span class="line"><span style="color:#FFF">	version: </span><span style="color:#FFC799">5</span><span style="color:#FFF">,</span></span>
<span class="line"><span style="color:#FFF">	description: </span><span style="color:#99FFE4">'blazing fast'</span><span style="color:#FFF">,</span></span>
<span class="line"><span style="color:#FFF">	website: </span><span style="color:#99FFE4">'https://svelte.dev'</span></span>
<span class="line"><span style="color:#FFF">};</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">PackageInfo</span><span style="color:#A0A0A0"> {...</span><span style="color:#FFF">pkg</span><span style="color:#A0A0A0">}</span><span style="color:#A0A0A0"> /></span></span></code></pre> <ul><li>Similarly in <code>PackageInfo.svelte</code> we can get an object containing all the props that were passed into a component using a rest property:</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">	let</span><span style="color:#FFF"> { name, </span><span style="color:#A0A0A0">...</span><span style="color:#FFF">stuff } </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> $</span><span style="color:#FFC799">props</span><span style="color:#FFF">();</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span></code></pre> <ul><li>Or we can skip the destructuring altogether and access the properties by their object paths.</li> <li></li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Svelte_props_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_30 as _
};
