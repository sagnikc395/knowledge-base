import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
const metadata = {
  "title": "Svelte Logic",
  "tags": [
    "svelte",
    "frontend",
    "ui",
    "ui-logic",
    "conditional-rendering"
  ],
  "date": "26/7/25"
};
const { title, tags, date } = metadata;
function Svelte_logic_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<h3>if blocks:</h3> <ul><li>HTML doesn’t have a way of expressing logic, like conditionals and loops. Svelte docs.</li> <li>To conditionally render some markup, we wrap it in an <code>if</code> block.</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">	let</span><span style="color:#FFF"> count </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> $</span><span style="color:#FFC799">state</span><span style="color:#FFF">(</span><span style="color:#FFC799">0</span><span style="color:#FFF">);</span></span>
<span class="line"><span style="color:#A0A0A0">	function</span><span style="color:#FFC799"> increment</span><span style="color:#FFF">() {</span></span>
<span class="line"><span style="color:#FFF">		count </span><span style="color:#A0A0A0">+=</span><span style="color:#FFC799"> 1</span><span style="color:#FFF">;</span></span>
<span class="line"><span style="color:#FFF">	}</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">button</span><span style="color:#A0A0A0"> onclick</span><span style="color:#FFF">=</span><span style="color:#A0A0A0">{</span><span style="color:#FFF">increment</span><span style="color:#A0A0A0">}></span></span>
<span class="line"><span style="color:#FFF">	Clicked </span><span style="color:#A0A0A0">{</span><span style="color:#FFF">count</span><span style="color:#A0A0A0">}</span></span>
<span class="line"><span style="color:#A0A0A0">	{</span><span style="color:#FFF">count </span><span style="color:#A0A0A0">===</span><span style="color:#FFC799"> 1</span><span style="color:#A0A0A0"> ?</span><span style="color:#99FFE4"> 'time'</span><span style="color:#A0A0A0"> :</span><span style="color:#99FFE4"> 'times'</span><span style="color:#A0A0A0">}</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">button</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFF">{#</span><span style="color:#A0A0A0">if</span><span style="color:#FFF"> count </span><span style="color:#A0A0A0">></span><span style="color:#FFC799"> 100</span><span style="color:#FFF">}</span></span>
<span class="line"><span style="color:#A0A0A0">	&lt;</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">>{</span><span style="color:#FFF">count</span><span style="color:#A0A0A0">}</span><span style="color:#FFF"> is greater than 100!</span><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#FFF">{/</span><span style="color:#A0A0A0">if</span><span style="color:#FFF">}</span></span></code></pre> <h3>else blocks:</h3> <ul><li>Just like in JS, an <code>if</code> block can have an <code>else</code> block.</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#FFF">{#</span><span style="color:#A0A0A0">if</span><span style="color:#FFF"> count </span><span style="color:#A0A0A0">></span><span style="color:#FFC799"> 10</span><span style="color:#FFF">}</span></span>
<span class="line"><span style="color:#A0A0A0">	&lt;</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">>{</span><span style="color:#FFF">count</span><span style="color:#A0A0A0">}</span><span style="color:#FFF"> is greater than 10</span><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#FFF">{:</span><span style="color:#A0A0A0">else</span><span style="color:#FFF">}</span></span>
<span class="line"><span style="color:#A0A0A0">	&lt;</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">>{</span><span style="color:#FFF">count</span><span style="color:#A0A0A0">}</span><span style="color:#FFF"> is betwen 0 and 10</span><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#FFF">{/</span><span style="color:#A0A0A0">if</span><span style="color:#FFF">}</span></span></code></pre> <ul><li><code>{#...}</code> opens a block. <code>{/...}</code> closes a block.</li> <li><code>{:...}</code> continues a block.</li></ul> <h3>else-if blocks:</h3> <ul><li>Multiple conditions can be <code>chained</code> together with a <code>else if</code></li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#FFF">{#</span><span style="color:#A0A0A0">if</span><span style="color:#FFF"> count </span><span style="color:#A0A0A0">></span><span style="color:#FFC799"> 10</span><span style="color:#FFF">}</span></span>
<span class="line"><span style="color:#A0A0A0">	&lt;</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">>{</span><span style="color:#FFF">count</span><span style="color:#A0A0A0">}</span><span style="color:#FFF"> is greater than 10</span><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#FFF">{:</span><span style="color:#A0A0A0">else if</span><span style="color:#FFF"> count </span><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799"> 5</span><span style="color:#FFF">}</span></span>
<span class="line"><span style="color:#A0A0A0">	&lt;</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">>{</span><span style="color:#FFF">count</span><span style="color:#A0A0A0">}</span><span style="color:#FFF"> is less than 5</span><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#FFF">{:</span><span style="color:#A0A0A0">else</span><span style="color:#FFF">}</span></span>
<span class="line"><span style="color:#A0A0A0">	&lt;</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">>{</span><span style="color:#FFF">count</span><span style="color:#A0A0A0">}</span><span style="color:#FFF"> is between 5 and 10</span><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#FFF">{/</span><span style="color:#A0A0A0">if</span><span style="color:#FFF">}</span></span></code></pre> <h3>each blocks:</h3> <ul><li>When building user interfaces we’ll often find ourself working with lists of data.</li> <li>Instead of laboriously copying, pasting and editing components, we can get rid of all but the first button , then use an <code>each</code> block.</li> <li>here colors in this any valid iterable or array-like object.</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">div</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#FFF">	{#</span><span style="color:#A0A0A0">each</span><span style="color:#FFF"> colors </span><span style="color:#A0A0A0">as</span><span style="color:#FFF"> color, idx}</span></span>
<span class="line"><span style="color:#A0A0A0">		&lt;</span><span style="color:#FFC799">button</span></span>
<span class="line"><span style="color:#A0A0A0">			style</span><span style="color:#FFF">=</span><span style="color:#99FFE4">"background: </span><span style="color:#A0A0A0">{</span><span style="color:#FFF">color</span><span style="color:#A0A0A0">}</span><span style="color:#99FFE4">"</span></span>
<span class="line"><span style="color:#A0A0A0">			aria-label</span><span style="color:#FFF">=</span><span style="color:#A0A0A0">{</span><span style="color:#FFF">color</span><span style="color:#A0A0A0">}</span></span>
<span class="line"><span style="color:#A0A0A0">			aria-current</span><span style="color:#FFF">=</span><span style="color:#A0A0A0">{</span><span style="color:#FFF">selected </span><span style="color:#A0A0A0">===</span><span style="color:#FFF"> { color }</span><span style="color:#A0A0A0">}</span></span>
<span class="line"><span style="color:#A0A0A0">			onclick</span><span style="color:#FFF">=</span><span style="color:#A0A0A0">{</span><span style="color:#FFF">() </span><span style="color:#A0A0A0">=></span><span style="color:#FFF"> (selected </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> { color })</span><span style="color:#A0A0A0">}</span></span>
<span class="line"><span style="color:#A0A0A0">		></span></span>
<span class="line"><span style="color:#A0A0A0">			{</span><span style="color:#FFF">idx </span><span style="color:#A0A0A0">+</span><span style="color:#FFC799"> 1</span><span style="color:#A0A0A0">}</span></span>
<span class="line"><span style="color:#A0A0A0">		&lt;/</span><span style="color:#FFC799">button</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#FFF">	{/</span><span style="color:#A0A0A0">each</span><span style="color:#FFF">}</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">div</span><span style="color:#A0A0A0">></span></span></code></pre> <ul><li>We can use color in the loop also, and get the current index as a second argument.</li></ul> <h3>Keyed-each blocks:</h3> <ul><li>By default, updating the value of an <code>each</code> block will add or remove DOM nodes at the end of the block if the size changes, and update the remaining DOM. That might not what we want.</li> <li>In Svelte, rendering works differently. <ul><li>The component ‘runs’ once, and subsequent updates are ‘fine-grained’.</li> <li>This makes things faster and gives us more control.</li></ul></li> <li>We can specify a unique ‘key’ for each iteration of the each block so helps with rendering and only updating specific things.</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#8B8B8B94">&lt;!-- Thing.svelte --></span></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">	const</span><span style="color:#FFF"> emojis </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> {</span></span>
<span class="line"><span style="color:#FFF">		apple: </span><span style="color:#99FFE4">'🍎'</span><span style="color:#FFF">,</span></span>
<span class="line"><span style="color:#FFF">		banana: </span><span style="color:#99FFE4">'🍌'</span><span style="color:#FFF">,</span></span>
<span class="line"><span style="color:#FFF">		carrot: </span><span style="color:#99FFE4">'🥕'</span><span style="color:#FFF">,</span></span>
<span class="line"><span style="color:#FFF">		doughnut: </span><span style="color:#99FFE4">'🍩'</span><span style="color:#FFF">,</span></span>
<span class="line"><span style="color:#FFF">		egg: </span><span style="color:#99FFE4">'🥚'</span></span>
<span class="line"><span style="color:#FFF">	};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B8B8B94">	// \`name\` is updated whenever the prop value changes...</span></span>
<span class="line"><span style="color:#A0A0A0">	let</span><span style="color:#FFF"> { name } </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> $</span><span style="color:#FFC799">props</span><span style="color:#FFF">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B8B8B94">	// ...but \`emoji\` is fixed upon initialisation</span></span>
<span class="line"><span style="color:#A0A0A0">	const</span><span style="color:#FFF"> emoji </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> emojis[name];</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">>{</span><span style="color:#FFF">emoji</span><span style="color:#A0A0A0">}</span><span style="color:#FFF"> = </span><span style="color:#A0A0A0">{</span><span style="color:#FFF">name</span><span style="color:#A0A0A0">}&lt;/</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#8B8B8B94">&lt;!-- App.svelte --></span></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">let</span><span style="color:#FFF"> things </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> $</span><span style="color:#FFC799">state</span><span style="color:#FFF">([</span></span>
<span class="line"><span style="color:#FFF">{ id: </span><span style="color:#FFC799">1</span><span style="color:#FFF">, name: </span><span style="color:#99FFE4">'apple'</span><span style="color:#FFF"> },</span></span>
<span class="line"><span style="color:#FFF">		{ id: </span><span style="color:#FFC799">2</span><span style="color:#FFF">, name: </span><span style="color:#99FFE4">'banana'</span><span style="color:#FFF"> },</span></span>
<span class="line"><span style="color:#FFF">		{ id: </span><span style="color:#FFC799">3</span><span style="color:#FFF">, name: </span><span style="color:#99FFE4">'carrot'</span><span style="color:#FFF"> },</span></span>
<span class="line"><span style="color:#FFF">		{ id: </span><span style="color:#FFC799">4</span><span style="color:#FFF">, name: </span><span style="color:#99FFE4">'doughnut'</span><span style="color:#FFF"> },</span></span>
<span class="line"><span style="color:#FFF">		{ id: </span><span style="color:#FFC799">5</span><span style="color:#FFF">, name: </span><span style="color:#99FFE4">'egg'</span><span style="color:#FFF"> }</span></span>
<span class="line"><span style="color:#FFF">]);</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">button</span><span style="color:#A0A0A0"> onclick</span><span style="color:#FFF">=</span><span style="color:#A0A0A0">{</span><span style="color:#FFF">() </span><span style="color:#A0A0A0">=></span><span style="color:#FFF"> things.</span><span style="color:#FFC799">shift</span><span style="color:#FFF">()</span><span style="color:#A0A0A0">}></span></span>
<span class="line"><span style="color:#FFF">	Remove the first thing</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">button</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFF">#</span><span style="color:#FFC799">each</span><span style="color:#A0A0A0"> things</span><span style="color:#A0A0A0"> as</span><span style="color:#A0A0A0"> thing</span><span style="color:#FFF"> (</span><span style="color:#A0A0A0">thing</span><span style="color:#FFF">.</span><span style="color:#A0A0A0">id</span><span style="color:#FFF">)</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">Thing</span><span style="color:#A0A0A0"> name</span><span style="color:#FFF">=</span><span style="color:#A0A0A0">{</span><span style="color:#FFF">thing.name</span><span style="color:#A0A0A0">}</span><span style="color:#A0A0A0"> /></span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">each</span><span style="color:#A0A0A0">></span></span></code></pre> <ul><li>We can use any object as the key, as Svelte uses a Map internally i.e can use (thing) instead of the (thing.id) also.</li> <li>Using a string or number is generally safer, however, since it means identity persists without referential equality, for ex: when updating with fresh data from an API server.</li></ul> <h3>await blocks:</h3> <ul><li>Most web applications have to deal with asynchronous data at some point.</li> <li>Svelte makes it easy for us to <code>await</code> the value of the promises directly in our markup.</li> <li>However, note that only the most recent <code>promise</code> is considered, meaning that we don’t need to worry about race conditions.</li> <li>If we know that our promise can’t reject, we can omit the <code>catch</code> block. We can also omit the first block if we don’t want to show anything until the promise resolved.</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#FFF">{#</span><span style="color:#A0A0A0">await</span><span style="color:#FFF"> promise </span><span style="color:#A0A0A0">then</span><span style="color:#FFF"> number}</span></span>
<span class="line"><span style="color:#A0A0A0">	&lt;</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span><span style="color:#FFF">You have rolled a </span><span style="color:#A0A0A0">{</span><span style="color:#FFF">number</span><span style="color:#A0A0A0">}&lt;/</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#FFF">{/</span><span style="color:#A0A0A0">await</span><span style="color:#FFF">}</span></span></code></pre> <ul><li>So we can write it as :</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#A0A0A0">	async</span><span style="color:#A0A0A0"> function</span><span style="color:#FFC799"> roll</span><span style="color:#FFF">() {</span></span>
<span class="line"><span style="color:#8B8B8B94">		//fetch a ranom number from 1...6</span></span>
<span class="line"><span style="color:#A0A0A0">		return</span><span style="color:#A0A0A0"> new</span><span style="color:#FFC799"> Promise</span><span style="color:#FFF">((fulfill, reject) </span><span style="color:#A0A0A0">=></span><span style="color:#FFF"> {</span></span>
<span class="line"><span style="color:#FFC799">			setTimeout</span><span style="color:#FFF">(() </span><span style="color:#A0A0A0">=></span><span style="color:#FFF"> {</span></span>
<span class="line"><span style="color:#8B8B8B94">				//simulate a flaky network</span></span>
<span class="line"><span style="color:#A0A0A0">				if</span><span style="color:#FFF"> (Math.</span><span style="color:#FFC799">random</span><span style="color:#FFF">() </span><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799"> 0.5</span><span style="color:#FFF">) {</span></span>
<span class="line"><span style="color:#FFC799">					reject</span><span style="color:#FFF">(</span><span style="color:#A0A0A0">new</span><span style="color:#FFC799"> Error</span><span style="color:#FFF">(</span><span style="color:#99FFE4">'Request failed'</span><span style="color:#FFF">));</span></span>
<span class="line"><span style="color:#A0A0A0">					return</span><span style="color:#FFF">;</span></span>
<span class="line"><span style="color:#FFF">				}</span></span>
<span class="line"><span style="color:#FFC799">				fulfil</span><span style="color:#FFF">(Math.</span><span style="color:#FFC799">floor</span><span style="color:#FFF">(Math.</span><span style="color:#FFC799">random</span><span style="color:#FFF">() </span><span style="color:#A0A0A0">*</span><span style="color:#FFC799"> 6</span><span style="color:#FFF">));</span></span>
<span class="line"><span style="color:#FFF">			});</span></span>
<span class="line"><span style="color:#FFF">		});</span></span>
<span class="line"><span style="color:#FFF">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">	let</span><span style="color:#FFF"> promise </span><span style="color:#A0A0A0">=</span><span style="color:#FFF"> $</span><span style="color:#FFC799">state</span><span style="color:#FFF">(</span><span style="color:#FFC799">roll</span><span style="color:#FFF">());</span></span>
<span class="line"><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">script</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">button</span><span style="color:#A0A0A0"> onclick</span><span style="color:#FFF">=</span><span style="color:#A0A0A0">{</span><span style="color:#FFF">() </span><span style="color:#A0A0A0">=></span><span style="color:#FFF"> (promise </span><span style="color:#A0A0A0">=</span><span style="color:#FFC799"> roll</span><span style="color:#FFF">())</span><span style="color:#A0A0A0">}></span><span style="color:#FFF"> roll the dice </span><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">button</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A0A0">&lt;</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span><span style="color:#FFF">...rolling</span><span style="color:#A0A0A0">&lt;/</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFF">{#</span><span style="color:#A0A0A0">await</span><span style="color:#FFF"> promise </span><span style="color:#A0A0A0">then</span><span style="color:#FFF"> number}</span></span>
<span class="line"><span style="color:#A0A0A0">	&lt;</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span><span style="color:#FFF">You have rolled a </span><span style="color:#A0A0A0">{</span><span style="color:#FFF">number</span><span style="color:#A0A0A0">}&lt;/</span><span style="color:#FFC799">p</span><span style="color:#A0A0A0">></span></span>
<span class="line"><span style="color:#FFF">{/</span><span style="color:#A0A0A0">await</span><span style="color:#FFF">}</span></span></code></pre>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Svelte_logic_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_29 as _
};
