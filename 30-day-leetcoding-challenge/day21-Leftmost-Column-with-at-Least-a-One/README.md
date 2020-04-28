# [Leftmost Column with at Least a One](https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3306/)

## question

(This problem is an interactive problem.)

A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

  - BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
  - BinaryMatrix.dimensions() returns a list of 2 elements [m, n], which means the matrix is m * n.

Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.

Example 1:
```
Input: mat = [[0,0],[1,1]]
Output: 0
```

Example 2:
```
Input: mat = [[0,0],[0,1]]
Output: 1
```

Example 3:
```
Input: mat = [[0,0],[0,0]]
Output: -1
```

Example 4:
```
Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
Output: 1
```



## think
題目定義的 M 和 N最大為100，並只能呼叫存取BinaryMatrix 1000次

## Brute force 
- 找出第一個 ‘1’
從上住下掃一個 column，如果沒有就住右移，再重覆上住下掃


這樣子會是 O(M*N)  
超出題目要次數要求

## Optimization of Brute force 
- looking for first 0 from the right.
- instead of starting from the end of a row, how about starting from the index from the previous row where 1 occurred. This works since in the question we're given that **ow is sorted in ascending order**

## Binary Search 
- 如果該行最右的的 column 是 0 就 可以 skip 了
- 每一次，找出 middle
  - 如果middle == 1 ， then 住左邊， else 住右邊
