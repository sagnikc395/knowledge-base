---
title: Tailwind CSS
tags:
  - frontend
  - ui
  - css
  - tailwind
date: 20/1/25
---

[Link](https://www.youtube.com/watch?v=lCxcTsOHrjo)

## What is TailwindCSS and how is it different from other frameworks ?

- Tailwind CSS is a utility first framework that allows us to build modern , non-opionionated and applies pre-defined classes and we can style any way we want.
- Definitiely faster than writing raw CSS.

- tailwind compiles the css from src/input.css and generates the build into build. Using tailwind.config.js

- we can then compile tailwind as :

```shell
bunx tailwindcss -i src/input.css -o build/css/style.css
```

- with watch flag, we can watch for any changes:

```shell
 bunx tailwindcss -i .\src\input.css -o ./build/css/style.css --watch
```
