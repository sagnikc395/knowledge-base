---
title: knowledge discovery and search on your data!
tags:
  - search
  - knowl
  - ai
  - llms
date: 2/5/26
---
### search 
- a non-negotiable feature for nearly all content-based web applications. 
- focus on how to use AI and LLMs and search features together for an even better UI.
- to do mainly
	- find relevant results even if the search terms don't match exactly 
	- match based on semantic meaning, not just keywords
	- understand user intent and context 
	- provide succint results that go beyond the raw data.
- RAG 
	- Retrieval Augmented Generation 
	- R ->Retrieve information via a search algorithm 
	- A -> Augment our instructions with the search results 
	- G -> Generate better, richer and more accurate information using LLMs

### keyword search:
- keyword search is if the user-supplied search terms exist in the context of our dataset, and return any results that match.
- Almost every (even RAG) search implementation uses keyword search as a foundational component. 
	- Fast, simple and effective for many use cases.
- More technical and precise the terminology in the domain is, the more powerful keyword search is.
- keyword search doesnt have to be technical and to improve keyword search we are going to do some text processing eg: `bear` , `Bear` and `bear.` should all be identified as the same keyword.

### text processing pipeline:
- Case sensitivity ->
	- convert all of the text to lowercase 
- Punctuation ->
	- we don't care about periods , commas etc.
	- removing all punctuations from the text in our dataset.
	- some cases where this doesnt work , eg: hyphens 
- Tokenization ->
	- break the text into individual words called tokens.
	- using simple word based tokenization for keyword search.
- Stop Words ->
	- Remove common stop words that don't add much meaning 
	- not all tokens are created equal
	- eg: a, the, is , of etc.
- Stemming -> 
	- keep only the stem of words
	- eg: `["running","jumping"]` -> `["run","jump"]`