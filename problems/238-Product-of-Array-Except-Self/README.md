# [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

## question

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

**Example:**
```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

**Constrain:t** It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

**Note:** Please solve it **without division** and in O(n).

**Follow up:**
Could you solve it with constant space complexity? (The output array **does not** count as extra space for the purpose of space complexity analysis.)

## think

#### 1. 如果使用 brute force， 每一個 element 都去算其他 elements 的 product ?
- Time complexity O(n^2) ， 題目要求O(n)， 這樣子不行

#### 2. 想說先把全部都先乘起來也不行...

#### 3. 用兩個 array
- left: 先求出前面所有的 products 
- right: 後面所有的 products

如要找出 i 
left = nums[0]~nums[i-1]
right =  nums[i+1]~nums[length-1]
ans[i] = left * right

3個 for loop = 3n = O(n)