---
title: Ebit Engine - the most famous Go game engine
tags:
  - ebitengine
  - golang
  - game-dev
date: 1/12/25
---
- Ebitengine is a game engine created in 2013 by Hajime Hoshi.
- Ebit supports following:
	- drawing 2d graphics 
	- handing user input 
	- playing audio
- It is very stable, simple and highly performant to make games using ebit engine.

- Ebit Engine define the interface which we need to implement the methods for:
```go
type Game interface {
Layout(outsideWidth, outsideHeight int) (screenWidth, screenHeight int)
Update() error 
Draw(screen *Image)
}
```

1. Layout 
	1. This is called in nearly every frame to determine the size of the application.
	2. Current size of the application window is provided as `outsideWidth` and `outsideHeight`.
	3. When the application is running in fullscreen mode, the size of the screen is provided.
	4. return value of the `Layout` is the size of the drawable screen area, or canvas size.
	5. If the window is smaller or larger than the canvas, the application is scaled while maintaining the correct aspect ratio.
2. Update 
	1. Calls the update logic to render the new frame.
	2. Called every tick to update the game state.
	3. The rate at which `Update` is being called is determined by the tick rate.
	4. Default tick rate is 60 ticks per second.
	5. Can modify the tick rate by calling `SetTPS`. 
3. Draw
	1. This is called every frame to draw the game onto the canvas.
	2. `Layout` will always be called at least once before `Draw` is called for the first time.
	3. Default frame rate is limited by the monitor's refresh rate, since `vertical synchronization` is enabled.
	4. Frame rate may be controlled by calling `SetVsyncEnabled`. When a value of false is being provided, the frame rate is no longer limited to the screen's refresh rate.

- For building the game, we must implement the `Game` interface.
- For this, we create a `struct` which implements the 3 required methods. 