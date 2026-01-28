---
title: Building a Small AI Agent from Scratch - Kai
tags:
  - ai
  - agentic-loop
  - claude-code
date: 1/27/26
---
- ref: https://github.com/sagnikc395/kai/
- Objective: building an app that can help us build other apps.
- what does an ai agent do ?
	- program that we are building is a CLI tool that 
		- accepts a coding task
		- chooses from a set of predefined functions to work on the task , like:
			- scan the files in a directory 
			- read a file's contents 
			- overwrites a file's contents
			- execute the python interpreter on a file 
	- repeats step2 until the task is complete (or it fails, which is also possible)
- 