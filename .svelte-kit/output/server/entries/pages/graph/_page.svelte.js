import { w as head } from "../../../chunks/index.js";
import "clsx";
import "d3";
function Graph($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="graph-container svelte-zf24ck"></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("315y67", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Knowledge Graph</title>`);
      });
    });
    $$renderer2.push(`<section class="svelte-315y67"><h1 class="svelte-315y67">Knowledge Graph</h1> <p class="svelte-315y67">Visualizing connections between notes.</p> `);
    Graph($$renderer2, { nodes: data.nodes, links: data.links });
    $$renderer2.push(`<!----></section>`);
  });
}
export {
  _page as default
};
