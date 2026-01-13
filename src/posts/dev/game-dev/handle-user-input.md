---
title: Handling user input with Ebit Engine
date: 1/12/25
tags:
  - golang
  - ebitengine
  - game-dev
---
- Origin Point
	- A fixed point of reference in relation to some geometry.
	- all images in EbitEngine have an origin point of (0,0) at the top left.
	- When we are drawing an image onto the screne using EbitEngine, we must specify some screen position to draw at.
	- This position specifies where to start drawing the image, beginning with its origin point.
	- i.e the position on the screen specifies where the top-left-most pixel of the image will be drawn.
- s