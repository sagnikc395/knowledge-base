---
title: "Tufte Style Post"
date: "2026-01-12"
---

<script>
  import Sidenote from '$lib/components/Sidenote.svelte'
  import Marginnote from '$lib/components/Marginnote.svelte'
</script>

# An Essay on Design

This is a sentence that requires a formal sidenote 
<Sidenote id="sn-1">Tufte CSS is inspired by the work of Edward Tufte.</Sidenote> 
which will appear in the margin on large screens.

<Marginnote id="mn-1">
  <img src="/my-diagram.png" alt="A margin image" />
  Margin notes don't have numbers!
</Marginnote>

The main body text continues here, maintaining the 55% width layout characteristic of Tufte's books.