import { G as sanitize_props, J as spread_props } from "./index.js";
import { M as MarkdownLayout } from "./MarkdownLayout.js";
const metadata = {
  "title": "Building a Small AI Agent from Scratch - Kai",
  "tags": ["ai", "agentic-loop", "claude-code"],
  "date": "1/27/26"
};
const { title, tags, date } = metadata;
function Kai_md($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  MarkdownLayout($$renderer, spread_props([
    $$sanitized_props,
    metadata,
    {
      children: ($$renderer2) => {
        $$renderer2.push(`<ul><li>ref: <a href="https://github.com/sagnikc395/kai/" rel="nofollow">https://github.com/sagnikc395/kai/</a></li> <li>Objective: building an app that can help us build other apps.</li> <li>what does an ai agent do ? <ul><li>program that we are building is a CLI tool that <ul><li>accepts a coding task</li> <li>chooses from a set of predefined functions to work on the task , like: <ul><li>scan the files in a directory</li> <li>read a file’s contents</li> <li>overwrites a file’s contents</li> <li>execute the python interpreter on a file</li></ul></li></ul></li> <li>repeats step2 until the task is complete (or it fails, which is also possible)</li></ul></li> <li>Goals Of Project: <ul><li>Understand how the AI tools work under the hood</li> <li>Writing a CLI tool with Python</li> <li>Using a pre-trained LLM to build an agent from scratch.</li> <li>How to make better DX for developers to use these tools and how to use it.</li></ul></li> <li>Gemini is an LLM. <ul><li>Given it a prompt , it will give you back an text , that it believes is the answer.</li></ul></li> <li>Tokens: <ul><li>Tokens are the currency of LLMs.</li> <li>The way LLMs measure how much text they have to process.</li> <li>Roughly 4 letters for most models.</li></ul></li> <li>LLM APIs aren’t typically used in a “one-shot” manner , as we need to keep the context of the conversation that is happening <ul><li>When we are talking to ChatGPT , the conversation has a history, and , if we keep track of that history ,then with each new prompt, the model can see the entire conversation and respond with the larger context of the conversation.</li></ul></li> <li>Most importantly, each message in the conversation has a “role”. <ul><li>eg: user role vs model / agent role</li></ul></li> <li>for testing and building our agent to see if it works properly , added a calculator building app e2e.</li> <li>capabilities of the agent <ul><li>ability to read the contents from files <ul><li>more specifically</li></ul></li> <li>built a guardrail to read the files in the guarded directory so the LLM doesnt run amok.</li></ul></li> <li>getting the contents of a file <ul><li>return the file contents as a string , or perhaps a error string if something went wrong.</li> <li>as always safely scope to this to the specific working directory.</li></ul></li></ul>`);
      },
      $$slots: { default: true }
    }
  ]));
}
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kai_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_19 as _
};
