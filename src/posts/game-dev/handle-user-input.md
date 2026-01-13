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
- Tick Rate
	- Ebit's default tick rate is 60 ticks per seconds.
	- So with the default tick rate, we handle any change in user input and update the game state every 16.6 ms.
	- If a user both presses and releases a key within the time between ticks, the application will not observe a key press.
	- Because of this, its important to set a high enough tick rate that all user input events are handled by the application.
	- Setting the tick rate too high will consume excessive system resources, and may lower the frame rate.
	- At high enough tick rates, the system may struggle to maintain the timing of each tick, even when sacrificing the frame rate.
	- Even if the system is able to sustain the high tick rate, battery-powered devices will drain more quickly.
	- A good default is a tick rate of 100, results in a accurate and responsive input handling without using resources excessively.
- Handling Keyboard Input
	- To detect whether or not a key is currently pressed, we call `ebiten.IsKeyPressed`.
	- When we want to detect whether or not a key is just starting to be pressed this tick, we call `inpututil.IsKeyJustPressed`.
	- `IsKeyPressed` always returns true every tick the key continues to be pressed, while `IsKeyJustPressed` only will return true , the first tick the key press event is observed.