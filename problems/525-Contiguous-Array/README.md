# [525. Contiguous Array](https://leetcode.com/problems/contiguous-array/)

## question

Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1. 
**Example 1:**
```
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
```

**Example 2:**
```
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
```

**Note:**
- The length of the given binary array will not exceed 50,000. 

## think
- Brute Force 
    - Time complexity: O(n^2), 題目 data set 有到 50000，會超時
    - Space complexity: O(1)
- HashTable 
    - Time complexity: O(n)
    - Space complexity: O(n)
    - 把 0 當成 -1