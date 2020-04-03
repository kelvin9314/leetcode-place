# Maximum Subarray

## question

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:
```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```



Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


## think to solve

- Dynamic Programming ??
- 暴力法: N+(N-1)+(N-2)+…+1，每個子陣列中的計算下一組和(如[-2] -> [-2,1])，都只需一個加法，故時間複雜度會是O(N²)