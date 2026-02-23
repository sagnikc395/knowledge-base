import { w as head, x as attr_class, y as attr, z as ensure_array_like, F as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { e as escape_html } from "../../chunks/context.js";
const favicon = "data:image/png;base64,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";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, children } = $$props;
    let isMenuOpen = false;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="icon"${attr("href", favicon)}/> <meta name="viewport" content="width=device-width, initial-scale=1"/>`);
    });
    $$renderer2.push(`<div class="app-shell svelte-12qhfyh"><button class="menu-toggle svelte-12qhfyh" aria-label="Toggle Menu">☰</button> <nav${attr_class("svelte-12qhfyh", void 0, { "open": isMenuOpen })}><h3 class="svelte-12qhfyh"><a${attr("href", `${stringify(base)}/`)} class="svelte-12qhfyh">Knowledge Base</a></h3> <div class="category"><ul class="svelte-12qhfyh"><li class="svelte-12qhfyh"><a${attr("href", `${stringify(base)}/graph`)} class="svelte-12qhfyh">Graph View</a></li></ul></div> <!--[-->`);
    const each_array = ensure_array_like(Object.entries(data.menu));
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let [category, items] = each_array[$$index_1];
      $$renderer2.push(`<div class="category"><p class="category-title svelte-12qhfyh"><strong>${escape_html(category.toUpperCase())}</strong></p> <ul class="svelte-12qhfyh"><!--[-->`);
      const each_array_1 = ensure_array_like(items);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let item = each_array_1[$$index];
        $$renderer2.push(`<li class="svelte-12qhfyh"><a${attr("href", `${stringify(base)}/notes/${stringify(item.slug)}`)} class="svelte-12qhfyh">${escape_html(item.title)}</a></li>`);
      }
      $$renderer2.push(`<!--]--></ul></div>`);
    }
    $$renderer2.push(`<!--]--></nav> <main class="svelte-12qhfyh">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _layout as default
};
