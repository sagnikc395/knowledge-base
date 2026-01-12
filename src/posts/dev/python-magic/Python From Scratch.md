---
title: Python from Scratch
tags:
  - basic-programming
  - python
  - boot-dev
date: 28/12/24
---

### Console:

- "console" is a panel that displays important messages, like errors or the text output of a program. If we want to see what's happening in our code, we need to print it to the console by using the `print()` function.

### What is Code:

- What is Code?
  - Code is a just a series of instructions for a computer to follow one after another. Programs can have a lot of instructions.
  - Code runs in order, starting at the top of the program.

### Syntax:

- Syntax is jargon for valid code that the computer can understand.
- The rules for how expressions and statements should be structured in languge can also be called as syntax.
- Syntax errors aren't the only kind of problems that you can run into when coding:
  - - **A bug in your logic**. Your code is *valid*, and will *run*, but it does something unexpected.
  - **It's too slow**. Your code is *valid* and does *what's expected*, but it does it slowly

### Variables:

- [Variables](https://www.cs.utah.edu/~germain/PPS/Topics/variables.html) are how we *store* data as our program runs.
- A "variable" is just a name that we give to a value. For example, we can make a new variable named `my_height` and set its value to `100`:

```py
my_height = 100
```

- Or we can define a variable called `my_name` and set it to the text string `"Lane"`:

```py
my_name = "Lane"
```

- Once we have a variable, we can access its value by using its name.
- Variables are called "variables" because they can hold any value and that value can change (it varies).
- Negative numbers in Python work the way you probably expect. Just add a minus sign.
- Python has built-in support for exponents - something most languages require a `math` library for.
- Plus Equals -> Python makes reassignment easy when doing math. In JavaScript or Go, you might be familiar with the `++` syntax for incrementing a number variable by 1. In Python, we use the `+=` [in-place operator](https://docs.python.org/3/library/operator.html#in-place-operators) instead.
- As we covered earlier, a `float` is a positive or negative number **with a fractional part**.
- You can add the letter `e` or `E` followed by a positive or negative integer to specify that you're using [scientific notation](https://en.wikipedia.org/wiki/Scientific_notation).

```python
print(16e3)
# Prints 16000.0

print(7.1e-2)
# Prints 0.071
```

- Python also allows you to represent large numbers in the decimal format using underscores as the [delimiter](https://en.wikipedia.org/wiki/Decimal_separator#Digit_grouping) instead of commas to make it easier to read.

```python
num = 16_000
print(num)
# Prints 16000

num = 16_000_000
print(num)
# Prints 16000000
```

- Logical operators deal with [boolean values](https://en.wikipedia.org/wiki/Boolean_data_type), `True` and `False`.
- The logical `and` operator requires that *both* inputs are `True` to return `True`. The logical `or` operator only requires that *at least one* input is `True` to return `True`.
- The `not` operator reverses the result. It returns `False` if the input was `True` and vice-versa.
- [Binary numbers](https://en.wikipedia.org/wiki/Binary_number) are just "base 2" numbers. They work the same way as "normal" base 10 numbers, but with two symbols instead of ten.
- Each `1` in a binary number represents an ever-greater multiple of 2. In a 4-digit number, that means you have the eights place, the fours place, the twos place, and the ones place. Similar to how in decimal you would have the thousands place, the hundreds place, the tens place, and the ones place.
- We can write an integer in Python using binary syntax using the `0b` prefix.
- Bitwise operators are similar to logical operators, but instead of operating on boolean values, they apply the same logic to all the bits in a value by column.
- A `1` in binary is the same as `True`, while `0` is `False`. So really a bitwise operation is just a bunch of logical operations that are completed in tandem by column.
- Ampersand `&` is the bitwise "and" operator in Python. "And" is the *name* of the bitwise operation, while ampersand `&` is the *symbol* for that operation.
- As you may have guessed, the bitwise "or" operator is similar to the bitwise "and" operator in that it works on binary rather than boolean values. However, the bitwise "or" operator "or"s the bits together.
- When coding it's necessary to be able to compare two values. `Boolean logic` is the name for these kinds of comparison operations that always result in `True` or `False`.
- The operators:
  - `<` "less than"
  - `>` "greater than"
  - `<=` "less than or equal to"
  - `>=` "greater than or equal to"
  - `==` "equal to"
  - `!=` "not equal to"
- Here are some basic rules with if/else blocks.
  - You can't have an `elif` or an `else` without an `if`
  - You *can* have an `else` without an `elif`

### Comments:

- Comments don't do... anything. They are *ignored* by the Python interpreter. That said, they're good for what the name implies: adding comments to your code in plain English (or whatever language you speak).
- You can use triple quotes to start and end multi-line comments as well.This is useful if you don't want to add the `#` to the start of each line when writing paragraphs of comments.
- Variable names can *not* have spaces, they're continuous strings of characters.
  - The creator of the Python language himself, [Guido van Rossum](https://en.wikipedia.org/wiki/Guido_van_Rossum), [implores us](https://peps.python.org/pep-0008/#function-and-variable-names) to use `snake_case` for variable names. What *is* snake case? It's just a style for writing variable names.
- | Name        | Code             | Language(s) that recommend it |
  | ----------- | ---------------- | ----------------------------- |
  | Snake Case  | `my_hero_health` | Python, Ruby, Rust            |
  | Camel Case  | `myHeroHealth`   | JavaScript, Java              |
  | Pascal Case | `MyHeroHealth`   | C#, C++                       |
  | No Casing   | `myherohealth`   | No one: don't do this         |

### Variable Types:

- Python has several basic [data types](https://en.wikipedia.org/wiki/Data_type).
- **Strings**
  - In programming snippets of text are called "[strings](https://docs.python.org/3/library/stdtypes.html#textseq)". They're lists of characters *strung* together. We create strings by wrapping the text in single quotes or double quotes. That said, **double quotes are preferred**.
- **Numbers**:
  - Numbers are *not* surrounded by quotes when they're declared.
  - **An [integer](https://docs.python.org/3/c-api/long.html) is a number without a decimal part**:
  - **A [float](https://docs.python.org/3/library/functions.html#float) is a number with a decimal part**:
- **Booleans**:
  - A ["Boolean"](https://docs.python.org/3/c-api/bool.html#boolean-objects) (or "bool") is a type that can only have one of two values: `True` or `False`. As you may have heard, computers really only use 1's and 0's. These 1's and 0's are just `True/False` boolean values.

### f-strings:

- In Python we can create strings that contain dynamic values with the [f-string](https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals) syntax.
  - - Opening quotes must be preceded by an `f`.
- Variables within curly brackets have their values "interpolated" (injected) into the string.
- It's just a string with a special syntax.

### NoneType Variable:

- Not all variables have a value. We can make an "empty" variable by setting it to [`None`](https://docs.python.org/3/library/constants.html#None). `None` is a special value in Python that represents the absence of a value. It is *not* the same as zero, False, or an empty string.
- [NoneType](https://docs.python.org/3/library/types.html#types.NoneType) is *not* the same as a string with a value of "None".
- One usecase is to represent that a value hasn't been determined yet, for example, an uncaptured input.

### Dynamic Typing:

- Python is [dynamically typed](https://en.wikipedia.org/wiki/Type_system#Static_and_dynamic_type_checking_in_practice), which means a variable can store any type, and that type can *change*.
- In almost all circumstances, it's a *bad idea* to change the type of a variable. The "proper" thing to do is to just create a new one.
- Languages that aren't dynamically typed are [statically typed](https://developer.mozilla.org/en-US/docs/Glossary/Static_typing), such as Go (which you'll learn in a later course). In a statically typed language, if you try to assign a value to a variable of the wrong type, an error would crash the program.

### Math With Strings

- When working with strings the `+` operator performs a "[concatenation](https://en.wikipedia.org/wiki/Concatenation)", which is a fancy word that means "joining two strings". *Generally speaking, it's better to use string interpolation with `f-strings` over `+` concatenation*.

### Multi-Variable Declaration:

- We can save space when creating many new variables by declaring them on the same line:

```py
sword_name, sword_damage, sword_length = "Excalibur", 10, 200
```

- Any number of variables can be declared on the same line, and variables declared on the same line *should* be related to one another in some way so that the code remains easy to understand.

### Functions:

- Functions allow us to *reuse* and *organize* code.
- But we want to *reuse* our code! Why would we want to redo our work? What if we wanted to calculate the area of thousands of circles??? **That's where functions help.**
- Instead, we can define a new function called `area_of_circle` using the `def` keyword.

```python
def area_of_circle(r):
    pi = 3.14
    result = pi * r * r
    return result
```

- Functions can have multiple parameters ("parameter" being a fancy word for "input").
- The name of a parameter doesn't matter when it comes to which values will be assigned to which parameter. It's **position** that matters. The first parameter will become the first value that's passed in, the second parameter is the second value that's passed in, and so on.
- Some new developers get hung up on the difference between `print()` and `return`.
- It can be particularly confusing when the test suite we provide simply prints the output of your functions to the console. It makes it *seem* like `print()` and `return` are interchangeable, *but they are not*!
- `print()` is a function that:
  1. Prints a value to the console
  2. Does *not* return a value
- `return` is a keyword that:
  1. Ends the current function's execution
  2. Provides a value (or values) back to the caller of the function
  3. Does *not* print anything to the console (unless the return value is later `print()`ed)

- Code executes in *order from top to bottom*, so a variable needs to be created before it can be used. That means that if you define a function, you can't call that function until *after* the definition.
- When no return value is specified in a function, it will automatically return `None`. For example, maybe it's a function that prints some text to the console, but doesn't explicitly return a value.
- A function can return more than one value by separating them with commas.

```python
def cast_iceblast(wizard_level, start_mana):
   damage = wizard_level * 2
   new_mana = start_mana - 10
   return damage, new_mana # return two values
```

- When calling a function that returns multiple values, you can assign them to multiple variables.

```python
dmg, mana = cast_iceblast(5, 100)
print(f"Damage: {dmg}, Remaining Mana: {mana}")
# Damage: 10, Remaining Mana: 90
```

- To reiterate, **arguments are the actual values** that go into the function, such as `42.0`, `"the dark knight"`, or `True`. **Parameters are the names** we use in the function definition to refer to those values, which at the time of writing the function, can be whatever we like.
- In Python you can specify a [default](https://docs.python.org/3/glossary.html#term-parameter) value for a function argument. It's nice for when a function has arguments that are "optional". You as the function definer can specify a specific default value in case the caller doesn't provide one.

- A default value is created by using the assignment (`=`) operator in the function signature.

```python
def get_greeting(email, name="there"):
    print("Hello", name, "welcome! You've registered your email:", email)
```

### Scope:

- Scope refers to *where* a variable or function name is available to be used. For example, when we create variables in a function (such as by giving names to our parameters), that data is *not* available outside of that function.

```python
def subtract(x, y):
    return x - y
result = subtract(5, 3)
print(x)
# ERROR! "name 'x' is not defined"
```

- So far we've been working in the global scope. That means that when we define a variable or a function, that name is accessible in *every other place* in our program, even within other functions.

### Testing and Debugging:

- A unit test is just an automated program that tests a small "unit" of code. Usually just a function or two. The editor will have tabs: the "main.py" file containing your code, and the "main_test.py" file containing the unit tests.
- These new unit-test-style lessons will test your code's *functionality* rather than its output. Our tests will call functions in your code with different arguments, and expect certain return values. If your code returns the correct values, you pass. If it doesn't, you fail.
- There are two reasons for this change:
  1.  It's more realistic. In the real world, you'll be writing unit tests and running them against your code to make sure it works as expected.
  2.  You can run and debug your code with `print` statements, and leave those print statements in when you submit. Unlike the output-based lessons, you won't have to remove your `print` statements to pass.

### Debugging:

- When you're working as a professional developer, you'll typically write code on your computer and test it by yourself before it's deployed to users.
- That first part of the process is called *debugging*. You write some code, run it, and if it doesn't work, you fix the bugs. You repeat this process until you're confident that your code works as expected.
- A stack trace (or "traceback") is a scary-looking error message that the Python interpreter prints to the console when it encounters certain problems. Stack traces are most common (at least for you right now) when you're trying to run invalid Python code.

### Loops:

- Loops are a programmer's best friend. Loops allow us to do the same operation multiple times without having to write it explicitly each time.
- A *"for loop"* in Python is written like this:

```python
for i in range(0, 10):
    print(i)
```

- The body of a for-loop *must* be indented, otherwise you'll get a syntax error.
- Python has another type of loop, the `while` loop. It's a loop that continues `while` a condition remains `True`. The syntax is simple:

```python
while 1:
    print("1 evaluates to True")
```

### Lists:

- A natural way to organize and store data is in a `List`. Some languages call them "arrays", but in Python we just call them lists. Think of all the apps you use and how many of the items in the app are organized into lists.
- For example:
  - An X (formerly Twitter) feed is a list of posts
  - An online store is a list of products
  - The state of a chess game is a list of moves
  - This list is a list of things that are lists
- Lists in Python are declared using square brackets, with commas separating each item:

```python
inventory = ["Iron Breastplate", "Healing Potion", "Leather Scraps"]
```

- Sometimes when we're manually creating lists it can be hard to read if all the items are on the same line of code. We can declare the list using multiple lines if we want to.
- In the world of programming, counting is a bit strange! We don't start counting at `1`, we start at `0` instead.Each item in a list has an index that refers to its spot in the list.
- Now that we know how to create new lists, we need to know how to access specific items in the list.
- We access items in a list directly by using their *index*. Indexes start at 0 (the first item) and increment by one with each successive item. The syntax is as follows:

```python
best_languages = ["JavaScript", "Go", "Rust", "Python", "C"]
print(best_languages[1])
# prints "Go", because index 1 was provided
```

- The length of a List can be calculated using the `len()` function.The length of the list is equal to the number of items present. Don't be fooled by the fact that the length is not equal to the index of the last element, in fact, it will always be one greater.
- We can also change the item that exists at a given index. For example, we can change `Leather` to `Leather Armor` in the `inventory` list in the following way:

```python
inventory = ["Leather", "Iron Ore", "Healing Potion"]
inventory[0] = "Leather Armor"
```

- It's common to create an empty list then fill it with values using a loop. We can add values to the end of a list using the `.append()` method:

```python
cards = []
cards.append("nvidia")
cards.append("amd")
# the cards list is now ['nvidia', 'amd']
```

- `.pop()` is the opposite of `.append()`. Pop removes the last element from a list and returns it for use. For example:

```python
vegetables = ["broccoli", "cabbage", "kale", "tomato"]
last_vegetable = vegetables.pop()
# vegetables = ['broccoli', 'cabbage', 'kale']
# last_vegetable = 'tomato'
```

- While `.pop()` typically removes the last item of a list, it can also be used to remove an item at a specific index. For example, vegetables.pop(1) would remove 'cabbage' from the list. This can be useful when you need to remove items from other positions in your list.
- Remember that we can [iterate](https://en.wiktionary.org/wiki/iterate) over all the elements in a list using a loop. For example, the following code will print each item in the `sports` list.

```python
for i in range(0, len(sports)):
    print(sports[i])
```

- Python has *the most elegant* syntax for iterating directly over the items in a list without worrying about index numbers. If you don't need the index number you can use the following syntax:

```python
trees = ['oak', 'pine', 'maple']
for tree in trees:
    print(tree)
# Prints:
# oak
# pine
# maple
```

- The built-in [float()](https://docs.python.org/3/library/functions.html#float) function can create a numeric floating point value of negative infinity. Because *every value* will be greater than negative infinity, we can use it to help us accomplish our goal of finding the max value.

```python
negative_infinity = float("-inf")
positive_infinity = float("inf")
```

- The modulo operator is the percent sign: `%`. It's important to recognize modulo is *not* a percentage though! That's just the symbol we're using.

```python
remainder = 8 % 3
# remainder = 2
```

- Python makes it easy to slice and dice lists to work only with the section you care about. One way to do this is to use the simple slicing operator, which is just a colon `:`.
- With this operator, you can specify where to start and end the slice, and how to step through the original list. List slicing returns a *new list* from the existing list.
- The syntax is as follows:

```python
my_list[ start : stop : step ]
```

- We can also omit various sections ("start", "stop", or "step"). For example, `numbers[:3]` means "get all items from the start up to (but not including) index 3". `numbers[3:]` means "get all items from index 3 to the end".

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[:3] # Gives [0, 1, 2]
numbers[3:] # Gives [3, 4, 5, 6, 7, 8, 9]
```

- only using the step section :

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[::2] # Gives [0, 2, 4, 6, 8]
```

- Negative indices count from the end of the list. For example, `numbers[-1]` gives the last item in the list, `numbers[-2]` gives the second last item, and so on.

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[-3:] # Gives [7, 8, 9]
```

- Concatenating two lists (smushing them together) is easy in Python, just use the `+` operator.

```python
total = [1, 2, 3] + [4, 5, 6]
print(total)
# Prints: [1, 2, 3, 4, 5, 6]
```

- Checking whether a value exists in a list is also really easy in Python, just use the `in` keyword.

```python
fruits = ["apple", "orange", "banana"]
print("banana" in fruits)
# Prints: True
```

- Python has a built-in keyword [del](https://docs.python.org/3/tutorial/datastructures.html#the-del-statement) that deletes items from objects. In the case of a list, you can delete specific indexes or entire slices.

```python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

# delete the fourth item
del nums[3]
print(nums)
# Output: [1, 2, 3, 5, 6, 7, 8, 9]

# delete the second item up to (but not including) the fourth item
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
del nums[1:3]
print(nums)
# Output: [1, 4, 5, 6, 7, 8, 9]

# delete all elements
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
del nums[:]
print(nums)
# Output: []
```

### Tuples:

- [Tuples](https://docs.python.org/3/library/stdtypes.html#typesseq-tuple) are collections of data that are ordered and unchangeable. You can think of a tuple as a `List` with a fixed size. Tuples are created with round brackets:

```python
my_tuple = ("this is a tuple", 45, True)
print(my_tuple[0])
# this is a tuple
print(my_tuple[1])
# 45
print(my_tuple[2])
# True
```

- While it's typically considered bad practice to store items of different types in a List, it's not a problem with Tuples. Because they have a fixed size, it's easy to keep track of which indexes store which types of data.
- Tuples are often used to store very small groups (like 2 or 3 items) of data. For example, you might use a tuple to store a dog's name and age.
- You can easily assign the values of a tuple to variables using unpacking.

```python
dog = ("Fido", 4)
dog_name, dog_age = dog
print(dog_name)
# Fido
print(dog_age)
# 4
```

- There is a special case for creating single-item tuples. You must include a comma so Python knows it's a tuple and not regular parentheses.
- Check if list is empty:

```python
 if not list_name:
	 ...
```

- reverse a list:

```python
list_name[::-1]
```

- The `.split()` method in Python is called on a string and returns a list by splitting the string based on a given delimiter. If no delimiter is provided, it will split the string on whitespace. Here's a quick example:

```python
message = "hello there sam"
words = message.split()
print(words)
# Prints: ["hello", "there", "sam"]
```

- The `.join()` method is called on a delimiter (what goes between all the words in the list), and takes a list of strings as input.

```python
list_of_words = ["hello", "there", "sam"]
sentence = " ".join(list_of_words)
print(sentence)
# Prints: "hello there sam"
```

### Dictionaries:

- [Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) in Python are used to store data values in `key` -> `value` pairs. Dictionaries are a great way to store groups of information.

```python
# use curly braces
# add key-value pairs
car = {
  "brand": "Tesla",
  "model": "3",
  "year": 2019
}
```

- Because dictionaries rely on unique keys, you can't have two of the same key in the same dictionary. If you try to use the same key twice, the first value will simply be overwritten.
- A value is retrieved from a dictionary by specifying its corresponding key in square brackets. The square brackets look similar to indexing into a list.
- You don't need to create a dictionary with values already inside. It is common to create a blank dictionary then populate it later using dynamic values. The syntax is the same as getting data out of a key, just use the assignment operator (`=`) to give that key a value.

```python
planets = {}
planets["Earth"] = True
planets["Pluto"] = False
print(planets["Pluto"])
# Prints False
```

- If you try to set the value of a key that already exists, you'll end up just updating the value of that key.
- You can delete existing keys using the `del` keyword.

```python
names_dict = {
    "jack": "bronson",
    "jill": "mcarty",
    "joe": "denver"
}

del names_dict["joe"]

print(names_dict)
# Prints: {'jack': 'bronson', 'jill': 'mcarty'}
```

- Notice that if you try to delete a key that doesn't exist, you'll get an *error*.
- If you're unsure whether or not a key exists in a dictionary, use the `in` keyword.
- We can iterate over a dictionary's keys using the same no-index syntax we used to iterate over the values in a list. With access to the dictionary's keys, we also have access to their corresponding values.

```python
fruit_sizes = {
    "apple": "small",
    "banana": "large",
    "grape": "tiny"
}

for name in fruit_sizes:
    size = fruit_sizes[name]
    print(f"name: {name}, size: {size}")
```

- As of Python version `3.7`, dictionaries are *ordered*. In Python `3.6` and earlier, dictionaries were *unordered*.
- Because dictionaries are ordered, the items have a defined order, and that order will *not* change.
- Unordered means that the items do *not* have a defined order, so you couldn't refer to an item by using an index.

### Sets:

- [Sets](https://docs.python.org/3/tutorial/datastructures.html#sets) are *like* Lists, but they are *unordered* and they guarantee *uniqueness*. Only *ONE* of each value can be in a set.

```python
fruits = {'apple', 'banana', 'grape'}
print(type(fruits))
# Prints: <class 'set'>

print(fruits)
# Prints: {'banana', 'grape', 'apple'}
```

- add :

```python
fruits = {'apple', 'banana', 'grape'}
fruits.add('pear')
print(fruits)
# Prints: {'banana', 'grape', 'pear', 'apple'}
```

- Because the empty bracket `{}` syntax creates an empty dictionary, to create an *empty* set, you need to use the `set()` function.

```python
fruits = set()
fruits.add('pear')
print(fruits)
# Prints: {'pear'}
```

- Iterate(order not guranteed):

```python
fruits = {'apple', 'banana', 'grape'}
for fruit in fruits:
   print(fruit)
   # Prints:
   # banana
   # grape
   # apple
```

- [Sets](https://docs.python.org/3/tutorial/datastructures.html#sets) are *like* Lists, but they are *unordered* and they guarantee *uniqueness*. Only *ONE* of each value can be in a set.

```python
fruits = {'apple', 'banana', 'grape'}
print(type(fruits))
# Prints: <class 'set'>

print(fruits)
# Prints: {'banana', 'grape', 'apple'}
```

- Removing Values:

```python
fruits = {'apple', 'banana', 'grape'}
fruits.remove('apple')
print(fruits)
# Prints: {'banana', 'grape'}
```

- With sets ,we can also do some set operations like add,difference etc:

```python
def find_missing_ids(first_ids, second_ids):
    first_ids_set = set(first_ids)
    second_ids_set = set(second_ids)
    return list(first_ids_set.difference(second_ids_set))
```

### Exceptions:

- You've probably encountered some errors in your code from time to time if you've gotten this far in the course. In Python, there are two main kinds of distinguishable errors.
  - syntax errors
  - exceptions
- You probably know what these are by now. A syntax error is just the Python interpreter telling you that your code isn't adhering to proper Python syntax.

```python
this is not valid code, so it will error
```

- Even if your code has the right syntax, however, it may still cause an error when an attempt is made to execute it. Errors detected during execution are called "exceptions" and can be handled gracefully by your code. You can even raise your own exceptions when bad things happen in your code.
- Python uses a [try-except](https://docs.python.org/3/tutorial/errors.html#handling-exceptions) pattern for handling errors.

```python
try:
  10 / 0
except Exception:
  print("can't divide by zero")
```

- `try` block is executed until an exception is raised or it completes, whichever happens first. In this case, an exception is raised because division by zero is impossible. The `except` block is only executed if an exception is raised in the `try` block.
- If we want to access the data from the exception, we use the following syntax:

```python
try:
  10 / 0
except Exception as e:
  print(e)

# prints "division by zero"
```

- `try` block is executed until an exception is raised or it completes, whichever happens first. In this case, a "divide by zero" error is raised because division by zero is impossible. The `except` block is only executed if an exception is raised in the `try` block. It then exposes the exception as data (`e` in our case) so that the program can handle the exception gracefully without crashing.
- Errors are *not* something to be scared of. Every program that runs in production is expected to manage errors on a constant basis. Our job as developers is to handle the errors gracefully and in a way that aligns with our user's expectations.An *error* or *exception* is raised when something bad happens, but as long as our code handles it as users expect it to, it's *not* a bug. A bug is when code behaves in ways our users don't expect it to.
- As a rule of thumb, you do not want to catch exceptions you raise within the same function block, for example:

```python
# don't do this
def craft_sword(metal_bar):
    try:
        if metal_bar == "bronze":
            return "bronze sword"
        if metal_bar == "iron":
            return "iron sword"
        if metal_bar == "steel":
            return "steel sword"
        raise Exception("invalid metal bar")
    except Exception as e:
        print(f"An error occurred: {e}")
```

- Instead, the caller should handle any potential error by wrapping the function call within a try/except block.

```python
# do this
try:
    craft_sword("gold bar")
except Exception as e:
    print(e)
```

- Important to understand is that there are different types of exceptions and we can handle them differently depending on the situation. Some exceptions are more specific, like `ZeroDivisionError` or `IndexError`, and some are more general, like the base `Exception`.
- When handling exceptions, it’s important to catch the **most specific ones** first, because Python stops checking once it finds a matching exception handler. If you catch a more general Exception first, any specific errors will never get handled individually.
- For example:

```python
try:
    nums = [0, 1]
    print(nums[2])
except Exception:
    print("An error occurred")
except IndexError:
    print("Index error")
```

- As seen in the example, you can also access the error using `as`, like this:

```python
except Exception as e:
    print(e)
```
