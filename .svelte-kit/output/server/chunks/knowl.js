import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
const metadata = {
  "title": "knowledge discovery and search on your data!",
  "tags": ["search", "knowl", "ai", "llms"],
  "date": "2/5/26"
};
const { title, tags, date } = metadata;
function Knowl_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<h3>search</h3> <ul><li>a non-negotiable feature for nearly all content-based web applications.</li> <li>focus on how to use AI and LLMs and search features together for an even better UI.</li> <li>to do mainly <ul><li>find relevant results even if the search terms don’t match exactly</li> <li>match based on semantic meaning, not just keywords</li> <li>understand user intent and context</li> <li>provide succint results that go beyond the raw data.</li></ul></li> <li>RAG <ul><li>Retrieval Augmented Generation</li> <li>R ->Retrieve information via a search algorithm</li> <li>A -> Augment our instructions with the search results</li> <li>G -> Generate better, richer and more accurate information using LLMs</li></ul></li></ul> <h3>keyword search:</h3> <ul><li>keyword search is if the user-supplied search terms exist in the context of our dataset, and return any results that match.</li> <li>Almost every (even RAG) search implementation uses keyword search as a foundational component. <ul><li>Fast, simple and effective for many use cases.</li></ul></li> <li>More technical and precise the terminology in the domain is, the more powerful keyword search is.</li> <li>keyword search doesnt have to be technical and to improve keyword search we are going to do some text processing eg: <code>bear</code> , <code>Bear</code> and <code>bear.</code> should all be identified as the same keyword.</li></ul> <h3>text processing pipeline:</h3> <ul><li>Case sensitivity -> <ul><li>convert all of the text to lowercase</li></ul></li> <li>Punctuation -> <ul><li>we don’t care about periods , commas etc.</li> <li>removing all punctuations from the text in our dataset.</li> <li>some cases where this doesnt work , eg: hyphens</li></ul></li> <li>Tokenization -> <ul><li>break the text into individual words called tokens.</li> <li>using simple word based tokenization for keyword search.</li></ul></li> <li>Stop Words -> <ul><li>Remove common stop words that don’t add much meaning</li> <li>not all tokens are created equal</li> <li>eg: a, the, is , of etc.</li></ul></li> <li>Stemming -> <ul><li>keep only the stem of words</li> <li>i.e only need the root words</li> <li>helps match different variations of the same word.</li> <li>eg: <code>["running","jumping"]</code> -> <code>["run","jump"]</code></li> <li>why stem words? <ul><li>goal is to match words from the user’s input to the words in our dataset.</li> <li>if we dont stem words, we can fail to retrieve some valid results.</li></ul></li></ul></li></ul> <h3>tf-idf</h3> <ul><li>inverted index is what makes the search fast.</li> <li>a forward index maps location -> value. An “inverted index” maps value -> location.</li> <li>very fast lookup and it gives us a way to cache things</li></ul> <h3>bm-25</h3> <ul><li>better IDF calculation : more stable scoring for rare/common terms</li> <li>term frequency saturations : prevents terms from dominating by appearing too often</li> <li>document length normalization: accounts for longer vs shorter documents.</li> <li>numerator -> N - df + 0.5 -> count of documents without the term (plus smoothing)</li> <li>denominator -> df + 0.5 -> count of documents with the term (plus smoothing) (0.5 added to prevent division by 0 -> laplace smoothing)</li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Knowl_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_20 as _
};
