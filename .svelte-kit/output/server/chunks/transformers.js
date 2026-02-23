import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
const metadata = {
  "title": "Coding and Understanding Transformers from Scratch",
  "tags": ["100xdevs", "transformers", "ai"],
  "date": "2/3/26"
};
const { title, tags, date } = metadata;
function Transformers_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<h3>From text to attention</h3> <ul><li>How transformers see language</li> <li>connecting the conceptual foundations to implementations</li> <li>What we know till now : <ul><li>Neural networks processes numbers / embeddings</li> <li>Models learn by adjusting weights</li> <li>Attention will focus on relevant words</li></ul></li> <li>Missing Pieces: <ul><li>How does the text transform into numbers ?</li> <li>What does the model actually “see” ?</li> <li>How does attention work mechanically ?</li></ul></li></ul> <h3>Tokenization:</h3> <ul><li>Character level model struggles <ul><li>Step problem</li> <li>Extreme inefficient</li> <li>high cognitive load</li> <li>manual pattern learning</li></ul></li> <li>Word Level Approach <ul><li>Concept Mapping -> each word represents a single,discrete unit of meaning</li> <li>Much more intuitive than character-level processing</li> <li>Challenges: <ul><li>“Form” problem -> Are “cat”, “cats”, “cat’s” three different concepts</li> <li>Unknown/Typo words -> how to handle typos like “teh” or rare technical terms ?</li> <li>Out of vocabulary -> any word not in the training set becomes a “hole” in understanding.</li></ul></li></ul></li> <li>vocab explosion : <ul><li>parameter bloat</li> <li>“unknown” problem</li> <li>multilingual scaling</li> <li>solution: <ul><li>subword solution -> finding the goldilocks balanace bw characters and words .</li> <li>strategic splitting <ul><li>middle ground -> bigger than characters (too granular) but smaller than whole words(too many)</li> <li>efficiency -> common word stay whole, rare words break into recognizable ,meaningful pieces.</li></ul></li> <li>vocab of 30k-100k tokens can represent almost any text in any language.</li></ul></li></ul></li> <li>Byte Pair Encoding (BPE) <ul><li>Algorithmic construction of how modern tokenization works</li> <li>Algo: <ul><li>Initialization <ul><li>Begin with each character as an individual token.</li></ul></li> <li>Iterative Merging <ul><li>merge the most frequent adjacent tokens pair into one.</li></ul></li> <li>Optimization <ul><li>repeat merges until reaching the target vocabulary size.</li></ul></li> <li>Self-organizing <ul><li>frequent patterns become single tokens; rare ones stay fragmented.</li></ul></li></ul></li> <li></li></ul></li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Transformers_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_14 as _
};
