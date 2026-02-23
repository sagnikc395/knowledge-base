import { z as ensure_array_like, y as attr, F as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { e as escape_html } from "../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<section><h1 class="title">💡 Knowledge Base</h1> <p class="subtitle">A collection of scratch notes and write-ups.</p> <div class="content"><div class="categories-grid svelte-1uha8ag"><!--[-->`);
    const each_array = ensure_array_like(Object.entries(data.menu));
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let [category, items] = each_array[$$index_1];
      $$renderer2.push(`<div class="category-card svelte-1uha8ag"><h2 class="svelte-1uha8ag">${escape_html(category.toUpperCase())}</h2> <ul><!--[-->`);
      const each_array_1 = ensure_array_like(items);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let item = each_array_1[$$index];
        $$renderer2.push(`<li><a${attr("href", `${stringify(base)}/notes/${stringify(item.slug)}`)}>${escape_html(item.title)}</a> `);
        if (item.date) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="date svelte-1uha8ag">— ${escape_html(new Date(item.date).toLocaleDateString())}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></li>`);
      }
      $$renderer2.push(`<!--]--></ul></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
export {
  _page as default
};
