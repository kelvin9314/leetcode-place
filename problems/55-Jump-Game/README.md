# [55. Jump Game](https://leetcode.com/problems/jump-game/)

## question

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:
```
Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

Example 2:
```
Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
```


## think
- 如果從 array的左邊開始抽找，會是找出所有的可能能到達 last index 的組合，這樣子可能就需要O(M*N) 的時間了
- 但我們可以反過來，從last index 問始向前找，如果打到一個 array[k] 的值去可以跳到 last index 的話
- 代表其他再前面的index 如要能夠到達這個 k 的位置，就一定可以到達 last index
- 所以我們把 goal 從 last index 設為這個 index k， 然後再向前找找看


  Time Complexity: O(n)
  Space Complexity: O(1)

這樣子的話是應該是**DP solution** 還是 **Greedy** @@ ?
