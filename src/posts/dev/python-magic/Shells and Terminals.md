---
title: Learn Shells and Terminals
tags:
  - boot-dev
  - basic-programming
  - shell-utilities
date: 2/1/25
---
### CLI:
- You'll often hear the terms "terminal", "shell", "command line", "CLI", and "command prompt" used interchangeably, but often they all refer to the same thing: a program that allows you to interact with your computer in a text-based way.
### What's a GUI?

If you don't have a technical background, you're probably used to interacting with your phone or computer using a [graphical user interface](https://en.wikipedia.org/wiki/Graphical_user_interface) (GUI). When you use a mouse to click on fancy icons, buttons, and menus, you're using a GUI.

To be fair, it's usually easier to teach someone how to use a GUI than a CLI. You can simply point to things and say "click here" or "drag this there". But GUIs do have some drawbacks:

- **They're weak.** You are given much more control over your computer through a CLI. With a GUI you're limited to the options that the developer of the GUI has given you.
- **They're slow.** Once you know the commands to type, it's much faster to type them than to click through endless menus with a mouse.
- **They're not as reproducible.** If you want to share a set of instructions, you can just copy and paste commands without worrying about screen sizes and user preferences.
- **They're not automatable.** It's easy to write code that manipulates text (as you've seen in Python), but it's much harder to write code that manipulates GUIs.
- **They're not as cool.** You will be invited to 90% fewer romantic outings if you are a GUI user.

### What is a terminal?

- As we talked about, the terms "shell", "CLI", and "terminal" are often used to refer to the same thing: the program that lets you issue text-based commands.
- However, to get pedantic, the "terminal" is just one _specific part_ of that program. Historically, the word "terminal" meant a physical device that you could type commands into, essentially a keyboard and a screen.
- A terminal emulator is a program that emulates a physical terminal. It's a program that lets you type commands into a window on your computer.
- _Which_ commands you're able to use isn't determined by the terminal emulator that you happen to be using. It's determined by the "shell", which we'll talk about later.
### What is a shell?

- So if your terminal is just a program that lets you issue text-based commands and renders the output of those commands...
	...What is the program that _runs_ those commands???
- That's a shell.
- Shells do a lot of things, but their main job is to interpret the commands you type and execute them.
- Shells are often referred to as "REPL"s. REPL stands for
	- Read
	- Eval (evaluate)
	- Print
	- Loop
- This is a fancy way of saying that shells are programs that:
	1. Read the commands you type
	2. Evaluate those commands, usually by running other programs on your computer
	3. Print the output of those commands
	4. Give you a new prompt to type another command and repeat
```bash
# to eval a result 
expr 123456 + 7890
```
### Variables:
- Both Bash and Zsh are shells, and they also happen to be powerful programming languages. They have variables, functions, loops, and more. That said, only [crazy people](https://bashsta.cc/) write large programs in shell languages... shells are optimized for running other programs and writing small scripts, not for writing programs.
```bash 
name="hello"
```

```bash
bankname="WorldBanc"
founded="1969"
ceo="Jeff Gates"
echo "$bankname was founded in $founded by $ceo"
```
### History:
- hen you're working in a REPL, it's _really_ helpful to be able to see the commands you've typed in the past. That way you can easily re-run them, or copy and paste them into a script.
```bash 
history
```
- You'll often want to re-run a command that you've run before. You could just type it out again, but assuming you don't have the [WPM](https://en.wikipedia.org/wiki/Words_per_minute) of ThePrimeagen, that's going to be a pain.
- Instead, you can use the up and down arrows to cycle through your command history. Focus your terminal window and use the "up" arrow key to start cycling through your command history. If you recently restarted your terminal type a few commands first, like:
```bash
echo hello
echo world
```
- If your terminal is feeling cluttered with text, you can clear it with the `clear` command, or by pressing `ctrl + l`. 
### FileSystems:
- All the data stored on your computer is organized into files and directories. Files and directories are organized into a tree-like structure called a filesystem.
- Directories (same as "folders" on Windows) are just containers that hold files and other directories.
- Files are just a dump of raw binary data: 1's and 0's. The bytes in a file can represent anything: text, images, videos, etc.
- The filesystem tree starts with a single directory called the [root directory](https://en.wikipedia.org/wiki/Root_directory). The root directory contains files and directories, which can contain more files and directories, and so on.
- When you open your terminal, your _working directory_ (the one you're "in") is going to be... somewhere. Most commonly it is your ["home" directory](https://en.wikipedia.org/wiki/Home_directory).
```bash 
# get the working dir 
pwd
```
- The output of your `pwd` command is a _filepath_. A filepath is a string that describes the location of a file or directory on your computer. Yours should look something like this:
```
/Users/wagslane
```
- The text might be different, but the structure should be the same. Let's break it down:
	- The first slash (`/`) represents the _root directory_. It's the tippy-top of the filesystem tree.
	- The next part (`Users`) is the name of a directory inside the root directory.
	- Finally, the last part (`wagslane`) is the name of a directory inside the `Users` directory.
- So this path represents a directory 2 levels down from the root directory:

```
root
  └── Users
        └── wagslane
```
### Parent Directories:
-  how you can "change directory" to move _into_ a directory. But how do you move back _out_ of a directory?
- The answer is two dots: `..`
- `..` is a special directory name that means "the parent directory". It's a shortcut that you can use to move up one level in the directory tree.
### Absolute vs Relative Paths:
- We've mostly been dealing with [relative filepaths](https://www.redhat.com/sysadmin/linux-path-absolute-relative) which are just paths that take into account your current directory.
- For example, let's say we have the following directory structure in our filesystem:
```
vehicles
├── cars
│   ├── fords
│   │   ├── mustang.txt
│   │   └── focus.txt
```
- When inside the top-level `vehicles` directory, the relative path to the `mustang.txt` file is:
```
cars/fords/mustang.txt
```
- However, when we're inside the `cars` directory, the relative path to the `mustang.txt` file is just:
```
fords/mustang.txt
```
- Or when inside the `fords` directory, just:
```
mustang.txt
```
- An absolute path is a path that starts at the root of the filesystem. On [Unix-like systems](https://en.wikipedia.org/wiki/Unix-like) (Mac OS/Linux/WSL), the root is denoted by a forward slash `/`. So, if the `vehicles` directory is in the filesystem root, the absolute path to the `mustang.txt` file is

```
/vehicles/cars/fords/mustang.txt
```
### Files:
- At their core, files are just blobs of data. The raw bytes in a file can represent anything: text, images, videos, etc.
- `cat` command is used to view the contents of a file. It's short for "concatenate", which is a fancy way of saying "put things together". It can feel like a confusing name if you're using the `cat` command to view a single file, but it makes more sense when you're using it to view multiple files at once.
```bash
# Print the contents of a file to the terminal
cat file1.txt
```
- Sometimes you don't want to print _everything_ in a file. Files can be really big after all.
- The head command
	- The [head](https://www.ibm.com/docs/en/aix/7.3?topic=h-head-command) command prints the first `n` lines of a file, where `n` is a number you specify.
```bash
head -n 10 file1.txt
```
- The tail command
	- The [tail](https://www.ibm.com/docs/en/aix/7.3?topic=t-tail-command) command prints the _last_ `n` lines of a file, where `n` is a number you specify.
```bash
tail -n 10 file1.txt
```
- The [more](https://www.ibm.com/docs/en/aix/7.3?topic=m-more-command) and [less](https://man7.org/linux/man-pages/man1/less.1.html) commands let you view the contents of a file, one page (or line) at a time.
- As the adage goes, `less` is `more`.
- In the context of these commands, `less` is _literally_ `more`. The `less` command does everything that the `more` command does but also has more features. As a general rule, you should use `less` instead of `more`.
- You would only use `more` if you're on a system that doesn't have `less` installed.
- `less` command, but this time, pass in the `-N` flag to show line numbers:   
```bash
less -N 2023.csv
```
- The [touch command](https://man7.org/linux/man-pages/man1/touch.1.html) is designed to update the access and modification timestamps of a file. By default, if the specified file does not exist, `touch` will create an empty file with the given filename. Because of this, you’ll often see this command used to quickly create new files.
```bash
touch new_file.txt
```
- You can also create multiple files at once by listing them:
```bash
touch some_file.txt some_other_file.txt
```

### Directories:
- a directory is just a location in a filesystem that can contain files and other directories. On some systems, directories are called "folders", but it's the same thing.
- The ["make directory" command](https://www.ibm.com/docs/en/aix/7.3?topic=m-mkdir-command) creates a new directory inside the current directory.

```bash
mkdir my_directory
```
### Move:
- The [move command](https://www.ibm.com/docs/en/aix/7.3?topic=files-moving-renaming-mv-command) moves a file or directory from one location to another. You can use it to rename a file or to move it to a different directory altogether. Your working directory can't be the directory you're moving.
- Renaming a file:
```bash
mv some_file.txt some_other_name.txt
```
- Moving a file from the current directory to another nested directory:
```bash
mv some_file.txt some_directory/some_file.txt
```
- Moving a file from the current directory, to the parent directory:
```bash
mv some_file.txt ../some_file.txt
```
- If you don't want to rename the file and you're just moving it to a different directory, you can omit the filename:
```bash
mv some_file.txt some_directory/
```

### Remove:
- The [remove command](https://www.ibm.com/docs/en/aix/7.3?topic=files-deleting-rm-command) deletes a file or empty directory:
```bash
rm some_file.txt
```
- You can optionally add a `-r` flag to tell the `rm` command to delete a directory and _all_ of its contents recursively. "Recursively" is just a fancy way of saying "do it again on all of the subdirectories and their contents".
```bash
rm -r some_directory
```
### Copy:
- [copy command](https://www.ibm.com/docs/en/aix/7.3?topic=c-cp-command) does what you would (hopefully) expect: it copies a file from one location to another.

```bash
cp source_file.txt destination/
```
- You can also copy a directory and all of its contents recursively by adding the `-R` flag:

```bash
cp -R my_dir new_dir
```
### Home:
- In a Unix-like operating system, a user's [home directory](https://en.wikipedia.org/wiki/Home_directory) is the directory where their personal files are stored. It is also the directory that a user starts in when logging into the system.
- I recommend doing all of your development work in your home directory. For example, I like to create a `workspace` directory in my home directory, and all my projects live in subdirectories there.
- Your home directory is where you want to spend most of your time. Many of the other directories on your machine are critical to the operating system or other programs. Be careful when working in [other directories](https://www.ibm.com/docs/en/aix/7.3?topic=reference-directories) like `/bin`, `/etc`, `/var`, etc.
- You can mess up your system if you're not careful.

- The `~` alias
	- My home directory (on Mac) is located at `/Users/wagslane`. The `~` character is an alias for your home directory. So when I want to go home, I don't have to type out `cd /Users/wagslane`, I can just type:

```bash
cd ~
```

### Grep:
- You might be used to nice graphical interfaces that allow you to search for text in files, usually with `ctrl+f` or `cmd+f`. But what about when you're working on a terminal?
- As it turns out, once you're used to it, searching for text in files on a CLI can be much faster than using a GUI.
- The [grep command](https://www.digitalocean.com/community/tutorials/grep-command-in-linux-unix) allows you to search for text in files. It has a _ton_ of capability, and we'll only be scratching the surface of its true power.
- Basic usage
- The most basic usage of `grep` is to search for a string in a file. For example, if we wanted to search for the word "hello" in the file `hello.txt`, we could run:
```bash
grep "hello" hello.txt
```
- You can also search multiple files at once. For example, if we wanted to search for the word "hello" in `hello.txt` and `hello2.txt`, we could run:
```bash
grep "hello" hello.txt hello2.txt
```
- Recursive search
- You can also search an entire directory, including all subdirectories. For example, if we wanted to search for the word "hello" in the current directory and all subdirectories, we could run:
```bash
# . is the current directory 
grep -r "hello" .
```
### Find:
- The `find` command is a powerful tool for finding files and directories by name, not by their contents.
- Find a file by name
	- Let's say you're looking for a file named `hello.txt` somewhere in your home directory. You can use the `find` command to search for exactly that title:
```bash
find some_directory -name hello.txt
```
- Pattern search
	- The `find` command can also search for files that match a pattern. For example, if you wanted to find all files that end in `.txt`, you could run:
```bash
find some_directory -name "*.txt"
```
- The `*` character is a wildcard that matches anything. If you're trying to find filenames that _contain_ a specific word, you can use the `*` character to match the rest of the filename:
```bash
# Find all filenames that contain the word "chad"
find some_directory -name "*chad*"
```

### Permissions:
- Unix-like systems (like the one you're using) support multiple users. Each user has their own home directory, their own files, and their own permissions.
- If you're like most people these days, you're the only user on your machine. It used to be more common for multiple people to share a single computer, or for multiple people to do their work on the same computer over a network.
- `sudo` keyword lets you run a command as a "superuser". It's short for ["superuser do"](https://www.linux.com/training-tutorials/linux-101-introduction-sudo/). To use it, you'll need a password with superuser privileges, which you should already have if you're the only user of your machine
- Some people are pedantic and pronounce `sudo` as "sue-doo". Others are correct and pronounce it "sue-dough".
- First, run the ["Who am I?" command](https://www.ibm.com/docs/en/zos/3.1.0?topic=wtsc-using-whoami-command) to see which user you're logged in as:

```bash
whoami
```
- In a Unix-like operating system, permissions control who can do what to which files and directories. The permissions of an individual file or directory are visually represented as a 10-character string:
```
drwxrwxrwx
```
- Let's break down each character. The first one just tells you whether you're looking at a file or a directory:
	- `-`: Regular file (e.g. `-rwxrwxrwx`)
	- `d`: Directory (e.g. `drwxrwxrwx`)

- The next 9 characters are broken up into 3 sets of `rwx` and represent the permissions themselves for the "owner", "group", and "others", in order. Each group of 3 represents the permissions for reading, writing, and executing, in order. So, for example:
	- `rwx`: All permissions
	- `rw-`: Read and write, but not execute
	- `r-x`: Read and execute, but not write
	- The first 3 characters are "owner" permissions. The "owner" is usually just the user who created the file or directory, but it can be manually changed.
	- The next 3 characters are "group" permissions. Unix-like systems support groups of users and a file or directory can be assigned to a single group. To be honest, unless you're a system administrator, you won't often worry about groups.
	- The last 3 characters are "others" permissions. This is everyone else.
	    
- In my experience, when you're doing programming work on your own local machine, you mostly just care about the "owner" permissions because that's usually you. Here are some full examples:
	- `-rwxrwxrwx`: A file where everyone can do everything
	- `-rwxr-xr-x`: A file where everyone can read and execute, but only the owner can write
	- `drwxr-xr-x`: A directory where everyone can read (`ls` the contents) and execute (`cd` into it), but only the owner can write (modify the contents)
	- `drwx------`: A directory where only the owner can read, write and execute
- The [chmod command](https://www.ibm.com/docs/en/aix/7.3?topic=c-chmod-command) lets you change the permissions of a file or directory. It's short for "change mode" (I wish it was called "change permissions", but alas).
- The `ls` command has a `-l` option (lowercase "L") that will print out the permissions of each file and directory in long format. Run this command inside the `worldbanc/private` directory:

```bash
ls -l
```
- Change the permissions of the `private` directory and all of its contents so that:
	- The owner can read, write, and execute
	- The group can do nothing
	- Others can do nothing
```bash
chmod -R u=rwx,g=,o= DIRECTORY
```
- In the command above, `u` means "user" (aka "owner"), `g` means "group", and `o` means "others". The `=` means "set the permissions to the following", and the `rwx` means "read, write and execute". The `g=` and `o=` mean "set group and other permissions to nothing". The `-R` means "recursively", which means "do this to all of the contents of the directory as well".
- Executables
	- You're probably familiar with the idea of reading and writing files. But what about executing them? Executable files are just programs that you can run on your computer.
	- Files with a `.sh` extension are [shell scripts](https://en.wikipedia.org/wiki/Shell_script). They're just text files that contain shell commands. You can run a file in your shell by just typing its filepath. 
	- Interestingly, if the program is in the current directory (in this example, the `mydir` directory), you need to prefix it with `./`:
```bash
./program.sh
```
- can add `chmod -x <script-name>` to remove permissions and `+x` to ad back those permissions.
### Root User:
- "root" user is a superuser. It has access to everything on the system and can do anything. When you use the `sudo` command, you're running as the root user (as long as your system hasn't been configured differently).
- The `sudo` keyword is convenient because it quickly gives you elevated permissions to run a single command.
- It can also be dangerous because it gives you access to everything. If you run a command with `sudo` that you don't understand, you could do serious damage to your system.
- For example, `rm` with the `r` and `f` flags run on the root directory (`/`), will **delete all the files on your system**. Don't do that. The `r` flag is for "recursive" (delete everything inside) and the `f` flag is for "force". Most systems will prevent you from doing this, but if you run it with `sudo`, you've just turned your computer into a very expensive paperweight.
- So when do you _need_ to use `sudo`? `chmod` allows you to change the permissions of any file or directory that you own. But what if you don't own the file or directory? That's where `sudo` is required. Let's change ownership of a directory to see how that works.
- The `chown` command, which stands for "change owner", allows you to change the owner of a file or directory, and it requires root privileges.

### Compiled vs Interpreted Programs:
- A program is just a set of instructions that a computer can execute. We talked about executables in the last lesson, an executable is just a file that contains a program. The words "program" and "executable" are often used interchangeably. Broadly speaking, there are two types of programs:
	- Compiled programs
		- A compiled program is a program that has been converted from human-readable source code into machine code (binary). [Machine code](https://en.wikipedia.org/wiki/Machine_code) is a set of instructions that a computer can execute directly: your computer's CPU is hardware that's been designed to execute machine code.
		- Programming languages like Go, C, and Rust are compiled languages that produce compiled programs.
	- Interpreted programs:
		- An interpreted program is a program that is executed by _another_ program. The program that executes the interpreted program is called an [interpreter](https://en.wikipedia.org/wiki/Interpreter_%28computing%29). The interpreter reads the source code of the interpreted program and executes it.
		- Programming languages like Python, Ruby, and JavaScript, are interpreted languages. Your computer needs to have an interpreter installed to run programs written in those languages.
### Shebang:
- That works out-of-the-box for files that are compiled executables. But what about scripts that need to be interpreted by another program? The computer needs to be told what program to use to interpret the file.
- A ["shebang"](https://en.wikipedia.org/wiki/Shebang_(Unix)) is a special line at the top of a script that tells your shell which program to use to execute the file.
- The format of a shebang is:
```bash
#! interpreter [optional-arg]
```
- For example, if your script is a Python script and you want to use Python 3, your shebang might look like this:

```bash
#!/usr/bin/python3
```
- For your main shell REPL, as we talked about before:
- If you're using Ubuntu on WSL, you're probably running a [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) shell.
- If you're using macOS, you're probably running a [Zsh](https://en.wikipedia.org/wiki/Z_shell) shell.
- If you're running a raw Linux installation, I pray you already know what you're using.
- To get hand-wavy about it, I want to explain the difference between the 3 shells you're likely to encounter:
	- `sh` - The Bourne shell. This is the original Unix shell and is [POSIX-compliant](https://en.wikipedia.org/wiki/POSIX). It's very basic and doesn't have many quality-of-life features.
	- `bash` - The Bourne Again shell. This is the most popular shell on Linux. It builds on `sh`, but also has a lot of extra features.
	- `zsh` - The Z shell. This is the most popular shell on macOS. Like `bash`, it does what `sh` can do, but also has a lot of extra features.
- Both `zsh` and `bash` are "sh-compatible" shells, meaning they can run `.sh` scripts, but they also have extra features that generally make them more pleasant to use. For your purposes, the differences between `zsh` and `bash` are not super significant.
### Shell Configuration:
- Bash and Zsh both have [configuration files](https://en.wikipedia.org/wiki/Unix_shell#Configuration_files) that run automatically each time you start a new shell session. These files are used to set up your shell environment. They can be used to set up aliases, functions, and environment variables.
- These files are located in your home directory (`~`) and are hidden by default. The `ls` command has a `-a` flag that will show hidden files:
```bash
ls -a ~
```
### Environment Variables:
- We talked about how you can create and use local variables in your shell:
```bash
name="Lane"
echo $name
# Lane
```
- There is another type of variable called [environment variables](https://en.wikipedia.org/wiki/Environment_variable). They are available to _all_ programs that you run in your shell.
- You can view all of the environment variables that are currently set in your shell with the command `env`.
- If you want to set a variable in your shell, you can use the `export` command:
```bash
export NAME="Lane"
```
- You can then use the variable in your shell, just as before:
```bash
echo $NAME
# Lane
```
- The interesting part is that programs and scripts you run in your shell can _also_ use that variable:
- For example, we can create a file called `introduce.sh` with the following contents:
```bash
#!/bin/sh
echo "Hi I'm $NAME"
```
- Then we run it:
```bash
chmod +x ./introduce.sh

./introduce.sh
# Hi I'm Lane
```

### Path:
- There are environment variables that are sort of "built-in" to your shell. By "built-in" I just mean that different programs and parts of your system know about them and use them. The `PATH` variable is one of those.
- Why do we care ?
	- If it weren't for the `PATH`, you'd have to remember the filesystem path of every executable you wanted to run. Instead of just running `ls`, you'd have to run `/bin/ls` (or whatever the location of the `ls` executable is on your system). That's not very convenient.
	- The `PATH` variable is a list of directories that your shell will look into when you try to run a command. If you type `ls`, your shell will look in each directory listed in your `PATH` variable for an executable called `ls`. If it finds one, it will just run it. If it doesn't, it will give you an error like: "command not found".

### Change Your Path:
- A common problem you'll run into in the future is that you install a new program on your machine, but when you try to run it from your terminal, you get an error like:

```bash
$ my-new-program
-bash: my-new-program: command not found
```

- Nine times out of ten, this is because the program is installed in a location that's not in your `PATH` variable. Oftentimes when you install a program using the CLI, it will print a message during the installation process that tells you where the command was installed. **Don't let your eyes glaze over when your terminal prints important messages!** Sometimes you just gotta [rtfm](https://www.dictionary.com/browse/rtfm).
- To add a directory to your `PATH` without overwriting all of the existing directories, use the `export` command and reference the existing `PATH` variable:
```bash
export PATH="$PATH:/path/to/new"
```
- The `$PATH` part is a reference to the existing `PATH` variable. The `:` separates the existing directories from the new directory (`/path/to/new`) that you're adding.
- In the last lesson, you changed your `PATH` variable for your current shell session. Trouble is, the next time you restart your shell, it will be reset to its default value. You won't be able to use the `worldbanc` CLI Tool from anywhere unless you change your `PATH` variable _permanently_.
- The most common way to do this is to add the same `export` command that you used in the last lesson to your shell's configuration file.
### Man:
- The [man](https://www.ibm.com/docs/en/aix/7.3?topic=m-man-command) command is short for "manual". It's a program that displays the manual for other programs.
- The `man` command will only work for programs that it has a manual for, but most built-in commands and Unix programs are supported. You just pass the name of the command you want to read the manual of as an argument. The most intuitive place to start, of course, is reading the manual-manual:

```bash
# open the man pages for the 'man' command
man man
```
- Most people don't just [read man pages for fun](https://www.youtube.com/watch?v=rT-fbLFOCy0). More often, the manual is used as a reference to quickly look up usage or special flags.
- You can search for text in the manual by pressing the `/` key and typing your search, then pressing enter. Let's try to look up what the `-r` flag does for the `ls` command:

```bash
man ls
# type '/-r' to start searching

# press 'n' to jump to the next result

# press 'N' to go back if you went too far
```

### Flags:
- some commands can take [flags](https://www.ibm.com/docs/en/aix/7.3?topic=names-command-flags). Flags are options that you can pass to a command to change its behavior.
- For example, the `ls` command can take a `-l` flag to show a "long" listing of files:
```bash
ls -l
```
- The `ls` command can also take a `-a` flag to show "all" files, including hidden files:
```bash
ls -a
```
- You can combine flags:
```bash
ls -al
```
- Whether or not a command takes flags, and what those flags are, is up to the developer of the command. That said there are some common conventions:
	- Single-character flags are prefixed with a single dash (.e.g `-a`)
	- Multi-character flags are prefixed with two dashes (e.g. `--help`)
	- Sometimes the same flag can be used with a single dash or two dashes (e.g. `-h` or `--help`)
- Programming languages have functions, and functions take arguments. For example, this Python function takes two arguments: `xp` and `level`:
```python
def print_player(xp, level):
    print("Player has", xp, "xp and is level", level)
```
- In a shell, commands (programs) can also take arguments. For example, the `cd` command takes a single argument (the directory to change to):
```bash
cd /home/wagslane
```
- Other commands might take multiple arguments. For example, the `mv` command takes two arguments: the file to move, and the destination to move it to:
```bash
mv file.txt newfile.txt
```

- By convention, most production-ready CLI tools have a "help" option that will print out some information about how to use the tool. It's usually accessed with one of the following:
	- `--help` (flag)
	- `-h` (flag)
	- `help` (first positional argument)

- The "help" output is often easier to parse than a full `man` page. It's usually more of a quick start guide than a full manual.

### Exit Codes:
- [Exit codes](https://en.wikipedia.org/wiki/Exit_status) (sometimes called "return codes" or "status codes") are how programs communicate back whether they ran successfully or not.
- `0` is the exit code for success. Any other exit code is an error. 9 times out of 10, if a non-zero exit code is returned (meaning an error) it will be `1`, which is the "catch-all" error code.
- Programs that call other programs use error codes to figure out if execution was successful. For example, if the Boot.dev server program exits with a non-zero exit code, we have another program that will automatically restart it and log the error.
- In a shell, you can access the exit code of the last program you ran with the question mark (`?`) variable. For example, if you run a program that exits with a non-zero exit code, you can see what it was with the `echo` command:

```bash
ls ~
echo $?
# 0
```

```bash
ls /does/not/exist
echo $?
# 1
```
### Standard Output:
- You might not even know it yet, but you're already a pro at using standard output. You've been using it since you started the first exercise in this course.
- ["Standard Output"](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_%28stdout%29), usually called "standard out" or "stdout", is the default place where programs print their output. It's just a stream of data that prints to your terminal, but we'll talk later about how it can be redirected to other places.
- All programming languages have a simple way to print to stdout. In Python, it's the `print` function:
```python
print("Hello world")
# Hello world
```
### Standard Error:
- ["Standard Error"](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_%28stderr%29), usually called "stderr", is the same thing as standard output, but for error messages. It's a stream completely separate from stdout so that you can redirect it to a different place if need be, but by default, it prints to your terminal just like stdout.
- ou can redirect stdout and stderr to different places using the `>` and `2>` operators. `>` redirects stdout, and `2>` redirects stderr.
- Redirect stdout to a file
```bash
echo "Hello world" > hello.txt
cat hello.txt
# Hello world
```
- Redirect stderr to a file
```bash
cat doesnotexist.txt 2> error.txt
cat error.txt
# cat: doesnotexist.txt: No such file or directory
```
### Standard In:
- If there's a standard output, there must be a standard input, right?
- ["Standard Input"](https://en.wikipedia.org/wiki/Standard_streams#Standard_input_%28stdin%29), usually called "standard in" or "stdin", is the default place where programs _read_ their input. It's just a stream of data that programs can read from as they run.
- All programming languages have a simple way to read from stdin. In Python, it's the `input` function:

```python 
# execution stops until the user types
# something (in this case "Lane") and presses enter
name = input("What is your name? ")

print("Hello,", name)
# Hello, Lane!
```

### Piping:
- One of the most beautiful things about the shell is that you can [pipe](https://en.wikipedia.org/wiki/Pipeline_%28Unix%29) the output of one program into the input of another program. With this one simple concept, you can run incredibly powerful automation tasks.
- The pipe operator is `|`. It's the character that looks like a vertical line. It's usually on the same key as the backslash (`\`) above the enter key. The pipe operator takes the stdout of the program on the left and "pipes" it into the stdin of the program on the right.

```bash
echo "Have you heard the tragedy of Darth Plagueis the Wise?" | wc -w
# 10
```

- However, instead of that text being sent to your terminal, the pipe operator pipes it into the `wc` (word count) command. The `wc` command counts the number of words in the input it receives. The `-w` flag tells `wc` to only count words.
### Interrupt:
- Sometimes a program will get stuck and you'll want to stop it. Common reasons for this are:
	- You made a typo in the command and it's not doing what you want
	- It's trying to access the internet but you're not connected
	- It's processing too much data and you don't want to wait for it to finish
	- There is a bug in the program causing it to hang
- In these cases, you can stop the program by pressing `ctrl + c`. This sends a "SIGINT" signal to the program, which tells it to stop.
### Kill:
- Sometimes a program is in such a bad state (or is so malicious) that it doesn't respond to the `SIGINT`, in which case the best option is to use another shell session (new terminal window) to manually [kill](https://www.ibm.com/docs/en/aix/7.3?topic=k-kill-command) the program.

```bash
kill PID
```
- `PID` stands for "process ID". Every process that's running on your machine has a unique ID. The [ps](https://www.ibm.com/docs/en/zos/3.1.0?topic=jobs-using-ps-command), "process status" command can be used to list the processes running on your machine, and their IDs:

```bash
ps aux
```

- The "aux" options just mean "show all processes, including those owned by other users, and show extra information about each process".

### Unix Philosophy:
- The [Unix Philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) is a simple set of principles that have guided the development of Unix-like operating systems for decades. It can be summarized as:

	1. Write programs that do one thing and do it well.
		1. why programs like `ls`, `grep`, and `less` exist. They do one thing, and they do it well. They don't try to do too much.
		2. `ls` lists files and directories
		3. `grep` searches for text
		4. `less` displays tex
	2. Write programs to work together.
	-  Because, at least according to the Unix Philosophy, programs should do one thing and do it well, it's easy to write programs that work together. For example, you can use `grep` to search for text in a file, and then pipe the output of `grep` into `less` to display the results interactively:
		
```bash
grep "hello" some_file.txt | less
```
	
	3. Write programs to handle text streams, because that is a universal interface.
		This point is more the "how" of the previous point. Programs work together easily when they all use the same interface: text streams. A text stream is just a sequence of characters that can be read or written sequentially. In other words, a text stream is just text.

	This hearkens back to the point we talked about at the beginning of this course: the shell is a command-line (text) interface. Text-based interfaces are much more powerful and extensible than graphical interfaces. That's why developers have been using them for decades, and why what we can do with them looks like magic to the uninitiated. 
### Package Manager:
- When you type a command like `apt install neovim`, the package manager will:
	1. Check to see if the package is already installed.
	2. If it's not installed, it will download the package from a repository.
	3. It will install the package on your computer.
	4. It will install any dependencies that the package needs to run.
	5. It will (hopefully) add the package to your PATH if it should be there.
- Good package managers keep track of what packages you have installed, and what versions of those packages you have installed. They keep your filesystem nice and tidy, making sure you haven't installed 10 different instances of the same package or application.