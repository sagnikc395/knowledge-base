import { w as head } from "../../../../chunks/index.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let Content = data.content;
    head("om9p7w", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.meta.title)}</title>`);
      });
    });
    $$renderer2.push(`<section><h1 class="title">${escape_html(data.meta.title)}</h1> <p class="subtitle">${escape_html(data.meta.date)}</p> <!---->`);
    Content($$renderer2, {});
    $$renderer2.push(`<!----></section>`);
  });
}
export {
  _page as default
};
