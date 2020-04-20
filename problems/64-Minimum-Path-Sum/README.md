# [64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)

## question
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

**Note:** You can only move either down or right at any point in time.

**Example:**
```
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
```


## think
### 1. Greedy Algorithm ? ：  
因為只能住 下 / 右擇一取，如果每一次都在這兩點單一的點中取最小的值，這只是局部最小值，其不一定整體的最值

### 2. DP 
bottom-up approach
- init. 
  - first row 可以從用累加的左方的
  - first column 可以從用累加的上方的
- 其他的每一個點dp[x][y]，其實要麻從上方 dp[x-1][y] 要麻就從左方dp[x][y-1]來的 （兩點都是到達該點最短的路徑）
- 這樣子我們只要取 dp[x-1][y] 和 dp[x][y-1] 兩者最小的那個，再加上 array[x][y]的值，就是目前這個點的最短的路徑


Time complexity = O(NM)
