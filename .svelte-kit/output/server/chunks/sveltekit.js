import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
const metadata = {
  "title": "SvelteKit Notes",
  "tags": ["svelte", "ui", "frontend"],
  "date": "31/5/25"
};
const { title, tags, date } = metadata;
function Sveltekit_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<ul><li>Sveltekit is the swiss army knife of JS frameworks -> backend framework for svelte <ul><li>fun -> no need to check for bundler config, routing ,ssr,csp, TS all built in</li> <li>fast -> server, server side rendering, hmr</li> <li>flexible -> spa, mpa, ssr, ssg all included !</li> <li>SvelteKit based on Svelte -> an UI framework that uses a compiler that lets us write concise components that do minimal work in the browser, using languages that we already know like HTML,CSS and JS.</li></ul></li> <li>Sveltekit can export static HTML files, run on your own Node server, deploy to edge functions. If a platforms runs JS, it runs sveltekit -> sometimes with 0 configuration.</li> <li>It blurs the data between the frontend and the backend -> can also create a backend application with API and a frontend with it.</li> <li>What does Sveltekit Solve ? <ul><li>Routing -> built-in file based routing</li> <li>Server-side Rendering</li> <li>Data Fetching</li> <li>Zero Config (ESLint, Prettier, Typescript,Playwright,Vitest)</li> <li>Code Splitting(loading data on demand) -> knows what to load what css, js to load for each page and preloading and the precious ms will be huge gain for performance.</li> <li>Handling Environment Variables</li> <li>Configurable rendering (SSR,SSG,CSR)</li> <li>Deployment</li></ul></li></ul> <h3>Creating a Project</h3> <ul><li><code>npm create svelte@latest my-app</code></li> <li><img src="/images/dev/Screenshot%202025-05-31%20at%209.27.21%20AM.png"/></li> <li><img src="/images/dev/Screenshot%202025-05-31%20at%209.27.52%20AM.png"/></li></ul> <h3>SvelteKit vs Svelte</h3> <ul><li>Sveltekit apps are SSR by default for speed and SEO.</li> <li>Can set the rendering type per page basis or for the entire site also.</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span style="color:#8B8B8B94">//src/layout/+server.ts</span></span>
<span class="line"><span style="color:#A0A0A0">export</span><span style="color:#A0A0A0"> const</span><span style="color:#FFF"> prerender </span><span style="color:#A0A0A0">=</span><span style="color:#FFC799"> true</span><span style="color:#FFF">;</span></span>
<span class="line"><span style="color:#8B8B8B94">//completely remove the JS also.</span></span>
<span class="line"><span style="color:#A0A0A0">export</span><span style="color:#A0A0A0"> const</span><span style="color:#FFF"> csr </span><span style="color:#A0A0A0">=</span><span style="color:#FFC799"> false</span><span style="color:#FFF">;</span></span></code></pre> <h3>Creating a SvelteKit Project From Scratch:</h3> <ul><li>create the <code>svelte.config.js</code> file .Contains the vite processor</li> <li>A preprocessor converts our svelte files into normal css and html and js.</li> <li>there are also other font preproceesor that we can use for different things as such.</li> <li>An adapter in the <code>svelte.config.js</code> adapts your system for deployment in the adapted target.</li> <li>Project Structure:</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span>src/</span></span>
<span class="line"><span>	app.html</span></span>
<span class="line"><span>	app.css</span></span>
<span class="line"><span>	routes/+page.svelte</span></span></code></pre> <ul><li><code>page.svelte</code> is a special file describes the route at that level.</li> <li>src folder is the heart of our project and maps to a page.</li> <li>lib to share shared components. -> alias to a special env <code>$lib</code> and we would know the name to it.</li> <li>app.d.ts -> type information for some special Sveltekit components.</li></ul> <h3>Pages:</h3> <ul><li>Sveltekit uses file based routing where routes according to the files in our project.</li> <li><img src="/images/dev/Screenshot%202025-05-31%20at%2011.59.01%20AM.png"/></li> <li></li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sveltekit_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_33 as _
};
