---
title: Mini LSM from Scratch
tags:
  - key-value-storage
  - lsm-tree
  - databases
date: 24/5/25
---

### What is LSM and why LSM ?

- LSM -> Log Structured merge trees are data structures that maintain key-value pairs.
- RocksDB based on LevelDB is an implementation of LSM-Tree storage engines. It provides many kv across functionalirties and used in many production systems.
- Somethings about LSM trees:
  - LSM Tree is a append friendly data structure. It is more intuitive to compare it to other KV Data structures like RedBlack Tree and B-Tree.
  - For RB-Tree and B-Tree, all the data operations are inplace -> meaning when we want to update the value corresponding to the key, the engine will overwrite its original memory or disk space with the new value.
  - In LSM Tree all the write operations are lazily applied to the storage -> The engine will batch the write operations into SST -> sorting string table files and will write them to a disk. Once written to the disk , the engine will not directly modify them.
  - In a particular background task called compaction,the engine will merge these files to apply the updates and deletion.

#### Architectural Design is a powerful abstraction for LSM Trees:

- Data are immutable on persistent storage -> Concurrency control is more straightforward. Offloading the background tasks (compaction) to remote servers is possible. Storing and serving data directly from cloud native storage systems like S3 is also feasible.
- Changing the compaction algorithm allows the storage engine to balance between read,write and space amplification. The data structure is versatile, and by adjusting the compaction parameters , we can optimize thje LSM structure for different workloads.

### Overview Of LSM:

- An LSM storage engine generally contains 3 parts:
  - Write ahead log to persist temporary data for recovery.
  - SSTs on the disk to maintain an LSM-Tree structure.
  - Mem-tables in memory for batching small writes.
- Storage engine generally provides the following interfaces:
  - Put(key,value) -> stores a key,value pair in the LSM tree.
  - Delete(key) -> remove a key and its corresponding value.
  - Get(key) -> get the value corresponding to a key.
  - Scan(range) -> get a range of the key-value pairs.
- For ensuring persistence:
  - Sync() -> this will ensure all the operations before sync are persisted to the disk.
- For efficiecny some engines choose to combine Put and Delete into a single operation called as WriteBatch which will accept a batch of key-value pairs.

### Write Path:

- ![[Screenshot 2025-05-24 at 9.23.45 AM.png]]
- 4 steps for the write path of LSM:
  - Write the key-value pair to the write ahead log so that it can be recovered after the storage engine crashes.
  - Write the key-value pair to memtable. After operations 1 and 2 , are completed, we can then notify the user that the write operation is completed.
  - (background activity) When a mem-table gets full, we will freeze them into immutable mem-tables and flush them to the disk as SST files in the background.
  - (background activity) The enigne will then compact some files and in some levels into lower levels to maintain a good shape for the LSM tree so that the read amplification is low.

### Read Path:

-
