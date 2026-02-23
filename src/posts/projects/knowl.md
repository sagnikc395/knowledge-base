---
title: knowledge discovery and search on your data!
tags:
  - search
  - ai
  - llms
  - knowl
date: 2/5/26
---
Building a research assistant agent from scratch is a rewarding project that moves beyond simple chatbots and into the realm of **autonomous workflows**. To do this right, you need to transition from "sending a prompt" to "designing a loop."

Here is a roadmap to building your agent, moving from architecture to implementation.

---

## 1. The Core Architecture

An agent isn't just a model; it’s a system. Your research assistant needs four specific components:

- **The Brain (LLM):** Usually a high-reasoning model (like Gemini 1.5 Pro or GPT-4o) that can handle complex instructions and long contexts.
    
- **The Tools (Action Space):** These allow the agent to interact with the world (e.g., Google Search API, ArXiv scraper, PDF parser).
    
- **The Memory:** * _Short-term:_ The current conversation and intermediate research steps.
    
    - _Long-term:_ A vector database (like Pinecone or Chroma) to store and retrieve past research papers.
        
- **The Planning Loop:** This is the logic where the agent looks at a goal, decides which tool to use, executes it, observes the result, and repeats until the task is done.
    

---

## 2. Choose Your Framework

While you can code this in pure Python, using an agentic framework will save you weeks of work:

- **LangGraph (Top Choice):** Built by the LangChain team, it allows you to create "cyclic" graphs. This is perfect for research because the agent often needs to go back and re-search if the first result wasn't good enough.
    
- **CrewAI:** Great if you want _multiple_ agents (e.g., one "Researcher" agent and one "Technical Writer" agent) working together.
    
- **Autogen:** Microsoft’s framework for conversational agents.
    

---

## 3. Step-by-Step Build Guide

### Phase A: Setup the Environment

You'll need an environment where your agent can browse the web.

1. **Search API:** Sign up for **Tavily** or **Serper**. These are search engines optimized specifically for LLMs (returning clean markdown instead of messy HTML).
    
2. **PDF Processing:** Use **PyMuPDF** or **Unstructured.io** to help your agent "read" downloaded research papers.
    

### Phase B: Define the Tools

In your code, you must wrap functions so the LLM knows how to call them.

> **Example:** You create a function `search_arxiv(query)`. You give the LLM a description: _"Use this tool to find peer-reviewed papers on ArXiv."_

### Phase C: The "Reasoning" Loop (ReAct)

You will likely implement the **ReAct (Reason + Act)** pattern. The prompt logic looks like this:

1. **Thought:** "The user wants to know about LLM quantization. I should first search for the latest papers from 2024."
    
2. **Action:** Call `web_search("LLM quantization methods 2024")`.
    
3. **Observation:** "I found three papers: AWQ, GGUF, and HQQ."
    
4. **Thought:** "Now I need to summarize the specific benefits of HQQ."

To build a research assistant, you need to implement four things: **Tools**, **Reasoning**, **Execution**, and **Memory**.

---

## 1. The Logic: The "ReAct" Loop

Most agents follow the **ReAct** (Reason + Act) pattern. Instead of the LLM giving a final answer immediately, you force it to follow a specific thought process:

1. **Thought:** The LLM describes what it needs to find.
    
2. **Action:** The LLM names a tool to use (e.g., `web_search`).
    
3. **Observation:** You run that tool in Python and give the result back to the LLM.
    
4. **Final Answer:** Once it has enough info, it stops and answers.

|**Feature**|**RAG**|**Agent**|
|---|---|---|
|**Primary Goal**|Knowledge (Facts)|Action (Tasks)|
|**Logic Flow**|**Linear:** Question → Search → Answer.|**Iterative:** Question → Plan → Action → Observe → Repeat.|
|**Autonomy**|Low (Follows a fixed pipeline).|High (Decides which tools to use and when).|
|**Analogy**|A librarian finding the right book for you.|A researcher who goes to the library, takes notes, and writes a report.|
|**Complexity**|Simpler to build and debug.|Harder to control; prone to "infinite loops."|
### The Modern Standard: "Agentic RAG"

For a high-quality research assistant, you combine them. You build an **Agent** that has a **RAG Tool** in its toolbox.

> **Example Loop from Scratch:**
> 
> 1. **Agent Thought:** "I need to know about Bio-transformers. I'll search my local database first."
>     
> 2. **Agent Action:** `run_rag_tool("What are bio-transformers?")`
>     
> 3. **Observation:** "No results found in local database."
>     
> 4. **Agent Thought:** "Okay, local search failed. I will now use my Web Search tool."
>     
> 5. **Agent Action:** `run_web_search("Bio-transformers research 2024")`


Starting with a pure **RAG (Retrieval-Augmented Generation)** system allows you to master the "data" side—indexing, embedding, and retrieval—without the chaos of an autonomous agent.

Once your RAG system is reliable, turning it into an **Agentic RAG** simply means giving an LLM the "remote control" to your RAG function.

---

## Phase 1: Building the "Static" RAG

To build this without a framework, you need to handle three specific steps: **Extraction**, **Embedding**, and **Retrieval**.

### 1. The Extraction (PDF Parsing)

Research papers are often dual-column and full of citations. Using a basic library like `pypdf` is a good starting point for a "scratch" project.

### 2. The Embedding (The "Map")

You need to turn text into numbers (vectors). You can use a local model (like `sentence-transformers`) or an API (like Gemini's embedding model).

### 3. The Retrieval (The Search)

When a user asks a question, you embed the question and find the "closest" vectors in your database using **Cosine Similarity**.

## Phase 2: Moving to "Agentic" RAG

In a standard RAG, the flow is: **User Query → Search → Answer.** It only happens once.

In **Agentic RAG**, the LLM controls the loop. This adds three "Superpowers" to your research assistant:

### A. Query Reformulation

If a user asks a vague question, the Agent rewrites it into a better search query before hitting the RAG database.

- **User:** "How do they fix the hallucination problem in that paper?"
    
- **Agent Thought:** "I should search for 'hallucination mitigation techniques' and 'Self-Correction logic' in the document."
    

### B. Multi-Hop Reasoning

If the answer requires connecting info from Page 2 and Page 20, a standard RAG might miss the connection. An agent can:

1. Search for "Methodology."
    
2. Read the observation.
    
3. Search for "Results" based on what it learned in the methodology.
    

### C. The "I Don't Know" Filter

A standard RAG will often try to "force" an answer from the top 3 results, even if they aren't relevant. An Agent can look at the search results and say: _"These snippets don't actually answer the question. I will try a different search term or tell the user I can't find it."_


Since you already have the "ReAct" loop logic, you just wrap your Phase 1 RAG into a function and call it a **Tool**.


## 1. Phase 1: Local Knowledge Ingestion

Your first goal is to turn multiple PDFs into a searchable index.

### Step A: The PDF Chunking

You can't feed a whole book into an LLM at once. You need to break it into "chunks."

- **The Strategy:** Overlapping chunks (e.g., 500 characters with a 100-character overlap) ensure that if a fact is split between two chunks, the context remains.
### Step B: The "Vector Store" From Scratch

Instead of using a database like Pinecone, you can store your embeddings in a simple Python list and use **Cosine Similarity** to find the best match.

## 2. Phase 2: The Agentic Fallback Logic

Now, we create the "Brain." We tell the LLM to look at the local data first. If the data is empty or irrelevant, it must trigger a web search.

### The System Prompt

This is where you define the "Fixed Token Count" and the "Fallback" behavior.

### The "Loop" Execution

This logic connects your Local RAG to your Web Tool.

## 3. The Web Search Tool (From Scratch)

For the web search, you can use the **Tavily API** (easiest for agents) or scrape a search engine directly. If you want to keep it "scratch," you can use a simple wrapper around Google:


## Summary of the Build Order

1. **Ingestion:** Write the PDF parser and chunker.
    
2. **Embedding:** Create a loop that sends each chunk to an embedding API (like Gemini or OpenAI) and saves the vectors in a `.npy` file.
    
3. **Search:** Implement the `cosine_similarity` function to find the top 3 chunks for any query.
    
4. **Agent Logic:** Write the "If/Else" controller that checks for the `TRIGGER_WEB_SEARCH` string.
    

**Would you like me to dive deeper into the code for a specific part, like the exact math for the embeddings or the scraping logic for the web search?**

Ref: https://www.youtube.com/watch?v=AUQJ9eeP-Ls