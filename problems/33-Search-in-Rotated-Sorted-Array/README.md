# [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)

## question
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

**Example 1:**
```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Example 2:**
```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```


## think

### Try 1
- 這一隻在 javascript 中來說，好像可以直接用 Array。indexOf 來處理就好了?
```javascript=
const searchV1 = (nums, target) => {
  let result = (nums.length !== 0 && nums.includes(target)) ? nums.indexOf(target) : -1
  return result
};
```
submit 了兩次, runtime 分別是 88ms 和 116ms，好像太久了

### Try 2
- 再來試著用 Binary Search 去處理好了
找mid 的 index， 分開 [left] 和 [right]， 兩個 Array 中一定有一個是 sorted 的  

先檢查任意一邊, logic 如下：
```
IF min <= target <= max
  then target is here
ELSE
  then target is on the other side
```


