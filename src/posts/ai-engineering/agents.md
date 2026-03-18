---
title: Agents and the Theory behind AI agents
tags:
  - ai-agents
  - mcp
  - context-files
  - agent-loops
date: 3/18/26
---
( and all the images take as part of learning from greg isenberg's channel as part of learning)

chat model -> question to answer, and so on
agent -> given an task and agent planning out the task and delivering us a result -> give it a goal and hope it becomes better to that goal.

![[Screenshot 2026-03-18 at 10.10.18 AM.png]]

- Inside a agent we have the agent loop:

	
	![[Screenshot 2026-03-18 at 10.11.13 AM.png]]
	1. observe
		1. read context, files, previous tool results
	2. think 
		1. reason about what to do next , plan approach 
	3. act 
		1. call a tool, edit a file , run a command 

-   after task is complete 
	- generates final response 
- then output to user 

- AI agent components:
	- LLM -> reasoning engine, understands language , makes decisions 
	- The loop -> keeps going until task done , doesnt stop after one response 
	- The tools -> read files, run code , search web , call APIs , edit files 
	- The Context -> CLAUDE.md , conversation history, memory files, skills 
-  Under the hood:
	- Agent platforms (Claude Code, Codex, Cowrok, Antigravity,Openclaw) etc are all running the same observe-think-act loop under the hood - learning one means we can use any of them.
	- Shift from chat to agents requires moving from prompt engineering to context engineering : load the agent with rich context so simple prompts produce excellent results 
	- A memory md file create self-improving loop where the agent learns preferences across sessions and makes fewer errors over time.
	- MCP -> Model Context Protocol -> acts as a universal translator between the agent and every tool it needs - Gmail, Calendar, Stripe , Notion etc.
	- Skills are reusuable SOPs packaged as markdown files; once we explain a process once, we can invoke it repeadtedly and they compound 
	- Scheduled tasks run skiils into automated workflows - that run on a cron without any manual trigger.f

