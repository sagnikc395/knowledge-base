---
title: SvelteKit Notes
tags:
  - svelte
  - ui
  - frontend
date: 31/5/25
---

- Sveltekit is the swiss army knife of JS frameworks -> backend framework for svelte
  - fun -> no need to check for bundler config, routing ,ssr,csp, TS all built in
  - fast -> server, server side rendering, hmr
  - flexible -> spa, mpa, ssr, ssg all included !
  - SvelteKit based on Svelte -> an UI framework that uses a compiler that lets us write concise components that do minimal work in the browser, using languages that we already know like HTML,CSS and JS.
- Sveltekit can export static HTML files, run on your own Node server, deploy to edge functions. If a platforms runs JS, it runs sveltekit -> sometimes with 0 configuration.
- It blurs the data between the frontend and the backend -> can also create a backend application with API and a frontend with it.
- What does Sveltekit Solve ?
  - Routing -> built-in file based routing
  - Server-side Rendering
  - Data Fetching
  - Zero Config (ESLint, Prettier, Typescript,Playwright,Vitest)
  - Code Splitting(loading data on demand) -> knows what to load what css, js to load for each page and preloading and the precious ms will be huge gain for performance.
  - Handling Environment Variables
  - Configurable rendering (SSR,SSG,CSR)
  - Deployment
- ![[Screenshot 2025-05-31 at 9.27.21 AM.png]]
- ![[Screenshot 2025-05-31 at 9.27.52 AM.png]]
- Sveltekit apps are SSR by default for speed and SEO.
- Can set the rendering type per page basis or for the entire site also.

```ts
//src/layout/+server.ts
export const prerender = true;
//completely remove the JS also.
export const csr = false;
```

### Creating a SvelteKit Project From Scratch:

- create the `svelte.config.js` file .Contains the vite processor
- A preprocessor converts our svelte files into normal css and html and js.
- there are also other font preproceesor that we can use for different things as such.
- An adapter in the `svelte.config.js` adapts your system for deployment in the adapted target.
- Project Structure:

```
src/
	app.html
	app.css
	routes/+page.svelte
```

- `page.svelte` is a special file describes the route at that level.
- src folder is the heart of our project and maps to a page.
- lib to share shared components. -> alias to a special env `$lib` and we would know the name to it.
- app.d.ts -> type information for some special Sveltekit components.

### Pages:

- Sveltekit uses file based routing where routes according to the files in our project.
- ![[Screenshot 2025-05-31 at 11.59.01 AM.png]]
-
