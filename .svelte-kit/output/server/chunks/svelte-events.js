import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
const metadata = {
  "title": "Svelte Events",
  "tags": ["svelte", "ui", "frontend", "DOM"],
  "date": "31/7/25"
};
const { title, tags, date } = metadata;
function Svelte_events_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<h3>DOM Events:</h3> <ul><li>We can listen to any DOM event on an element (such as click or <code>pointermove</code>) with a <code>on&lt;name></code> function.</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">div</span><span style="color:#A0A0A0"> {</span><span style="color:#FFF">onpointermove</span><span style="color:#A0A0A0">}></span></span>
<span class="line"><span style="color:#FFF">	The pointer is at </span><span style="color:#A0A0A0">{</span><span style="color:#FFF">Math.</span><span style="color:#FFC799">round</span><span style="color:#FFF">(m.x)</span><span style="color:#A0A0A0">}</span><span style="color:#FFF"> x </span><span style="color:#A0A0A0">{</span><span style="color:#FFF">Math.</span><span style="color:#FFC799">round</span><span style="color:#FFF">(m.y)</span><span style="color:#A0A0A0">}</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">div</span><span style="color:#A0A0A0">></span></span></code></pre> <ul><li>Like any other property where the name matches the value, we also use the short form.</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">	let</span><span style="color:#FFF"> m </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> $</span><span style="color:#FFC799">state</span><span style="color:#FFF">({ x: </span><span style="color:#FFC799">0</span><span style="color:#FFF">, y: </span><span style="color:#FFC799">0</span><span style="color:#FFF"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">	function</span><span style="color:#FFC799"> onpointermove</span><span style="color:#FFF">(event) {</span></span>
<span class="line"><span style="color:#FFF">		m.x </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> event.clientX;</span></span>
<span class="line"><span style="color:#FFF">		m.y </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> event.clientY;</span></span>
<span class="line"><span style="color:#FFF">	}</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">div</span><span style="color:#A0A0A0"> {</span><span style="color:#FFF">onpointermove</span><span style="color:#A0A0A0">}></span></span>
<span class="line"><span style="color:#FFF">	The pointer is at </span><span style="color:#A0A0A0">{</span><span style="color:#FFF">Math.</span><span style="color:#FFC799">round</span><span style="color:#FFF">(m.x)</span><span style="color:#A0A0A0">}</span><span style="color:#FFF"> x </span><span style="color:#A0A0A0">{</span><span style="color:#FFF">Math.</span><span style="color:#FFC799">round</span><span style="color:#FFF">(m.y)</span><span style="color:#A0A0A0">}</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">div</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">style</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#FFC799">	div</span><span style="color:#FFF"> {</span></span>
<span class="line"><span style="color:#FFF">		position</span><span style="color:#A0A0A0">:</span><span style="color:#FFC799"> fixed</span><span style="color:#FFF">;</span></span>
<span class="line"><span style="color:#FFF">		left</span><span style="color:#A0A0A0">:</span><span style="color:#FFC799"> 0</span><span style="color:#FFF">;</span></span>
<span class="line"><span style="color:#FFF">		top</span><span style="color:#A0A0A0">:</span><span style="color:#FFC799"> 0</span><span style="color:#FFF">;</span></span>
<span class="line"><span style="color:#FFF">		width</span><span style="color:#A0A0A0">:</span><span style="color:#FFC799"> 100%</span><span style="color:#FFF">;</span></span>
<span class="line"><span style="color:#FFF">		height</span><span style="color:#A0A0A0">:</span><span style="color:#FFC799"> 100%</span><span style="color:#FFF">;</span></span>
<span class="line"><span style="color:#FFF">		padding</span><span style="color:#A0A0A0">:</span><span style="color:#FFC799"> 1rem</span><span style="color:#FFF">;</span></span>
<span class="line"><span style="color:#FFF">	}</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">style</span><span style="color:#A0A0A0">></span></span></code></pre>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Svelte_events_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_28 as _
};
