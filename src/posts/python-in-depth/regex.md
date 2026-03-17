---
title: Regular Expressions
tags:
  - regex
  - python
date: 2/15/26
---
- regular expressions allows us to look and search for specific patterns of text.
- they can look extremely complicated but thats due to what we can do with them 
- we can create regular expressions with just about any pattern that we can think of.
- there are some characeters that need to be escaped while searching 
	- . is a special characterfor regular expressions 
	- for searching for a literal dot, we have to escape using a backslash.
- re module is used for regular expressions in python.
- raw string is a string in python prefixed with a r.
	- tells python not to handle backslashes in any special way.
	- `r'\tTab'` is a raw string 
- `re.compile()` will allow us to seperate out our patterns and store then in a variable and also reuse the variable for multiple searches.
- 