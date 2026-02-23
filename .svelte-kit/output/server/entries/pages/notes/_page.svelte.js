import { z as ensure_array_like, y as attr, F as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { e as escape_html } from "../../../chunks/context.js";
function treeNode($$renderer, node) {
  $$renderer.push(`<li class="svelte-1iledwa">`);
  if (node.type === "folder") {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<details open><summary class="svelte-1iledwa">${escape_html(node.name)}</summary> <ul><!--[-->`);
    const each_array = ensure_array_like(node.children);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let child = each_array[$$index];
      treeNode($$renderer, child);
    }
    $$renderer.push(`<!--]--></ul></details>`);
  } else {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<a${attr("href", `${stringify(base)}/notes/${stringify(node.post.slug)}`)}>${escape_html(node.name)}</a> `);
    if (node.post.date) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<span class="date svelte-1iledwa">— ${escape_html(new Date(node.post.date).toLocaleDateString())}</span>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]-->`);
  }
  $$renderer.push(`<!--]--></li>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<section><h1>All Notes</h1> <ul class="tree svelte-1iledwa"><!--[-->`);
    const each_array_1 = ensure_array_like(data.tree);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let node = each_array_1[$$index_1];
      treeNode($$renderer2, node);
    }
    $$renderer2.push(`<!--]--></ul></section>`);
  });
}
export {
  _page as default
};
