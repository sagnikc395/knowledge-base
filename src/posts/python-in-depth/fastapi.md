---
title: FastAPI Course
tags:
  - fatapi
  - backend-dev
  - model-deployment
date: 3/21/26
---
## Introduction to APIS
- API : APIs are mechanisms that enable 2 software components - such as the frontend and backend of an application - to communicate with each other using a defined set of rules, protocols and data formats.
- request / response flow -> customer requests for something(client) and the backend(kitchen) makes it and waiter serves it (HTTP)
- Need for APIS 
	- Database access to backend to do operations on data 
	- then frontend on deciding on how users will interact with backend.
	- monolithic architecture -> backend and frontend are very tightly coupled. any problem in any one , will affect everything else.
	- now microservices are used 
- why monolithic architecture is bad for development ?
	- it will work fine , but what is the better way.
	- the tightly coupled nature in monolithic architecture is a very big problem.
- API - ML perspective 
	- ML Model <- Backend <- Frontend (but this requires microservices architecture)

## FastAPI Philosophy 
- fastapi -> modern, high performance web framework for building APIs with Python.
	- built on top of :
		- starlette -> manages our API received requests and sends back responses 
		- pydantic -> type checking and type hinting and used for checking if the dat coming into our API is correct and in the right format or not.
- 2 reasons for building fastapi:
	- Fast to run APIs , handle concurrent users and handle latency
		- web server converts to SGI (server gateway interface)
		- SGI sends the prediction to api code 
		- API code sends the data back to the web server
		- Flask vs FastAPI
			- ![[Screenshot 2026-03-22 at 3.26.12 PM.png]]
			- Flask uses wSGI -> blocking architecture, can lead to slower processing and blocking the other call , flask uses werkzueg to implement this -> gunicorn used as the server 
			- FastAPI uses ASGI -> asynchronous way of doing it, uses uvicorn to build it 
	- Fast to code to build APIs
		- easier syntax and writing code with well defined principles to build the code.
		- does thing in asynchronous fashion 
		- automatic input validation
		- auto-generated interactive documentation 
		- seamless integration with modern ecosystem -> ML/DL libraries, OAuth, JWT, SQL Alchemey, Docker, Kubernetes etc.

## HTTP Methods in FastAPI

## Path and Query Params in FastAPI

## Pydantic Crash Course -> Data Validation in Python 

## Post Request in FastAPI

## PUT and DELETE IN FastAPI 

## Serving ML models with FastAPI 

## Improving the FastAPI API 

## Docker for Machine Learning 

## FastAPI + Docker Tutorial for Beginners 

## Deploying an FastAPI API On AWS 
