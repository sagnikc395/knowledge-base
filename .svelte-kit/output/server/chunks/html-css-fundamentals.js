import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
const metadata = {
  "title": "HTML,CSS Fundamentals for learning web dev",
  "tags": ["100xdevs", "html", "css"],
  "date": "1/13/26"
};
const { title, tags, date } = metadata;
function Html_css_fundamentals_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<h2>HTML Basics:</h2> <ul><li>2 jargons that we need to know <ul><li>tags</li> <li>attributes</li></ul></li> <li>defines the structure of your website</li> <li>what all things to be placed on your website</li> <li>popular tags</li></ul> <pre class="shiki vesper" style="background-color:#101010;color:#FFF"><code><span class="line"><span>	&lt;html></span></span>
<span class="line"><span>	&lt;head></span></span>
<span class="line"><span>	&lt;title></span></span>
<span class="line"><span>	&lt;body> </span></span>
<span class="line"><span>	&lt;div> / &lt;span></span></span>
<span class="line"><span>	&lt;h1> ... &lt;h6></span></span>
<span class="line"><span>	&lt;p></span></span>
<span class="line"><span>	&lt;img></span></span>
<span class="line"><span>	&lt;a></span></span>
<span class="line"><span>	input </span></span>
<span class="line"><span>	&lt;button></span></span>
<span class="line"><span>	&lt;b> / &lt;i></span></span>
<span class="line"><span>	&lt;center></span></span></code></pre> <ul><li><p>div will take the whole width of the page.</p> <ul><li>if very long, just overflow onto the next line.</li></ul></li> <li><p>html -> a tag to put all the text / code inside ; not that important, even if we dont write it issoaky</p> <ul><li>structure everyything on the website -> put some metadata info in head tag and context in body tag</li> <li>head contains some metadata -> like the title tag</li> <li>it is whatever is rendered inside , gets rendered in the meta tag -> inside the head tag.</li></ul></li> <li><p>meat of the codebase</p> <ul><li>texts,spans,divs, spans</li> <li>div -> takes 100% of the space <ul><li>can nest them</li></ul></li> <li>add some style to change the outer div and what the inner div has ’</li></ul></li> <li><p>to take only required space</p> <ul><li>use spans</li> <li>only take as much space that i need</li></ul></li> <li><p>texts that are bigger</p> <ul><li>h1… h6 -> h1 being the biggest ; heading 1 and so on</li> <li>p -> really long text, paragraph</li> <li>these are the primitives that people developed back in theday, nobody really follows</li></ul></li> <li><p>img</p> <ul><li>img tag</li> <li>self closing tag</li> <li>bring to my machine and render what we like</li></ul></li> <li><p>center</p> <ul><li>center tag nobody uses, but good to know</li> <li>to align the items centrally</li></ul></li> <li><p>linking page</p> <ul><li>a tag -> when the click on a button to link to another page</li></ul></li> <li><p>bold,italics</p> <ul><li>b -> bold</li> <li>i -> italic</li> <li>can also do bothj of them,</li></ul></li> <li><p>to get user input</p> <ul><li>input tag</li></ul></li> <li><p>attributes</p> <ul><li>properties for different tags that change the functionality</li> <li>some common are: <ul><li>img -> src</li> <li>a -> href</li> <li>button -> onclick -> basically in this we write some javascript and the button triggers the action event for that</li> <li>input -> id</li></ul></li> <li>different from tags</li> <li>tags are top-level things that define the structure</li> <li>each tag have multiple attribute that define what they can do.</li></ul></li></ul> <h2>CSS :</h2> <ul><li>to add styles to our websites</li> <li>used for positioning things on the page and making it accessible to users.</li> <li>only way to style inside our browser is using CSS.</li> <li>add using the style tags -> to add different styles <ul><li>like background-color</li> <li>color</li> <li>etc.</li></ul></li> <li>common styling attributes: <ul><li>color</li> <li>background</li> <li>border-radius -> gives it a better radius to make it style better</li> <li>border  -> adding border to the div to segregate the things</li> <li>padding / margin -> spacing</li> <li>box-shadow -> shadowing effect -> similar to border -> can tweak the direction and how it appears , unlike borders</li></ul></li> <li>to debug spaces / any UI thing can check from the chrome dev tools.</li> <li>the right way to position something n the screen is to use it via flexbox <ul><li>display: flex</li> <li>on parent</li> <li>makes all the div siblings reside in the same line</li></ul></li> <li>display: flex <ul><li>tells the parent tag to use the flexbox</li> <li>the children elements need to be positioned someway , right next to each other</li> <li>even if we put div inside it , it will come right next to each other</li> <li>always have the parent be a flexbox and the children will be peers</li></ul></li> <li>to make it equidistant: <ul><li>justify-content:</li> <li>default is flex start</li> <li>end is end starting</li> <li>space-between -> all tyhe children should be equidistant</li></ul></li> <li>the default is absolute-positioning and we align them using float: left and float:right</li> <li></li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Html_css_fundamentals_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_5 as _
};
