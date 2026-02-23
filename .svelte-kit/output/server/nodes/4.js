import * as server from '../entries/pages/notes/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/notes/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/notes/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.BD7DPBgV.js","_app/immutable/chunks/CCM6-gPc.js","_app/immutable/chunks/BE8cp4uu.js","_app/immutable/chunks/BUhI7Qyb.js","_app/immutable/chunks/BXkG0FcK.js","_app/immutable/chunks/CactJclj.js","_app/immutable/chunks/BwvfVqQf.js","_app/immutable/chunks/Lp0pb3Tn.js"];
export const stylesheets = ["_app/immutable/assets/4.pABCW45W.css"];
export const fonts = [];
