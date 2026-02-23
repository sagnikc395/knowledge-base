import * as server from '../entries/pages/graph/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/graph/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/graph/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.CJvljkYp.js","_app/immutable/chunks/CCM6-gPc.js","_app/immutable/chunks/BE8cp4uu.js","_app/immutable/chunks/Ce9mPtEv.js","_app/immutable/chunks/BRX--utR.js","_app/immutable/chunks/B58ZsqZY.js"];
export const stylesheets = ["_app/immutable/assets/3.CjxSBAjC.css"];
export const fonts = [];
