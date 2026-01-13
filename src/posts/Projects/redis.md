---
title: Implementing a Redis Clone in Python
tags:
  - redis
  - distributed-systems
  - databases
  - cache
  - rdb
date: 1/7/25
---

- Building a Python version of Redis server from scratch that is capable of serving basic commands, reading RDB files and more.
- Along the way learn about TCP servers, the Redis Protocol and more.

### Binding to a port:

- In this, we'll implement a TCP server that will listen on port 6379.
- TCP is the underlying protocol used by protocols like HTTP, SSH and others.
- Redis clients and servers use TCP to communicate with each other.
- 6379 is the default port that Redis uses.
- every webserver uses socket.
  - using the raw socket interface in python.
- what is a socket ?
  - computer send lots of packets back and forth.
  - for TCP, it goes like SYN, ACK ,SYNC for the first 3 packets.
  - sockets are abstractions on top of the TCP protocol.
  - basic TCP socket interface :- connection connecting to some other computer, sending and receiving data.
  ```python
  sock.recv(4096)
  # here it is the bytes we send
  sock.send("hi")
  ```

````

- the python socket module is basically the same as using sockets in C.

### Responding to PING:
- Redis clients communicate with Redis servers by sending "commands". For each command, a Redis server sends a response back to the client.
- Commands and responses are both encoded using the Redis protocol.
- PING is one of the simplest Redis commands. It's used to check whether a Redis server is healthy.
- Response for the PING command is `+PONG\r\n`.
- We'll cut corners by ignoring client input and hardcoding `+PONG\r\n` as a response.
- Exact bytes of our program will receive wont be just `PING` , we'll receive something like this:
- `*1\r\n$4\r\nPING\r\n` , which is the Redis protocol encoding of the PING command.
- Need to
	- wait for a client connection
	- send a PONG response
- To wait for a client connection, we can use the `socket.accept()` method, which blocks until a client connects.
- Once connected , it returns a Socket object representing the client connection:
 ```python
connection, _ = server_socket.accept()
````

- After the connection is established , we can send a PONG messages using `socket.sendall()` which accepts a bytes like object

```python
connection.sendall(b"+PONG\r\n")
```

-
