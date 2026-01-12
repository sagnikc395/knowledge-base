---
title: Building a kafka clone in Python
tags:
  - kafka
  - distributed-systems
  - projects
  - event-processing
  - python
date: 1/7/25
---

the source of the project can be found here : https://github.com/sagnikc395/kafka.git

### Response Messages in Kafka

- Kafka brokers communicate with clients through the Kafka wire protocol.
- This protocol uses a request-response model , where the client sends a request message and the broker replies with a response message.

### Kafka Response Message structure:

- The response message has 3 parts:
  - `message_size`
  - `header`
  - `body`
- `message_size`
  - this is a 32bit signed integer. It specifies the size of the header and the body.
- header
  - Kafka has a few different header versions.
  - The way kafka determines which header version to use is a bit complicated. Check [KIP-482](https://cwiki.apache.org/confluence/display/KAFKA/KIP-482%3A+The+Kafka+Protocol+should+Support+Optional+Tagged+Fields) and this [stackoverflow](https://stackoverflow.com/questions/71794315/questions-about-the-documentation-of-the-kafka-protocol/71853003#71853003)
  - In this project we have used response header version 0.

- Response Header V0:
  - Contains a single field : `correlation_id`.
  - This field lets clients match responses to their original requests.

### Working of Response Header V0:

- This contains a single field `correlation_id`.
- This field lets clients match responses to their original requests.
- Working procedure:
  - The client generates a correlation ID.
  - The client sends a request that includes the correlation ID.
  - The broker sends a response that includes the same correlation ID.
  - The client receives the response and matches the correlation ID to the original request.
- `correlation_id` is a 32-bit singed integer.
