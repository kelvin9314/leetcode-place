# [146. LRU Cache](https://leetcode.com/problems/lru-cache/)

## question

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a **positive** capacity.

**Follow up:**
Could you do both operations in **O(1)** time complexity?

Example :
```
LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```


## think
一開始想說要宜告兩個陣列
1. 一個去放 data 
2. 一個是放最後被架取的順序 （自已在每次 get 的時侯去重新排序，可能用 selection sort 之類的）

但後來試了一下， javascript 的 Map Object ，如果當中的某 key(i) 被刪除時，剩下的 i+1 到 i+n 的index 自已動前補  
就是一個**orderedDict**


這樣我們只要get(key) 每次被呼叫時侯  
- 先把該key 的 value 取出
- 從 Map 中 delete 該 key 
- 再重新 put 寫入一個新的key & value 到 Map, 這個新寫入就一定是在後面的 index
- 所以只要取 Map.keys().next().value 就入在最前方（最沒有被存取的 key 值了）
