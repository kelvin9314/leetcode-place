# [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)

## question

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

**Example 1:**
```
Input:
11110
11010
11000
00000

Output: 1
```

**Example 2:**
```
Input:
11000
11000
00100
00011

Output: 3
```

## think
graph -> node & edge -> 好像要用 **DFS / BFS**
> 深度優先搜尋法(DFS, Depth-first Search) : 看到有什麼就先點進去下屠 Recursive
> 廣度優先搜尋法(BFS, Breadth-first Search) ： 水平同一個level 的都的完，才再看下一個 level 的
- Time complexity: O(NM)
- Space complexity: O(NM)


### DFS
- 當找到一個是 '1' 的 position 的時侯，就不斷去找該點四週的點（上下左右）
  - 如果四週的任意一點也是 ‘1’，代表只同一個島的地，就把那點的值改成 ‘0’
  - 然後就再先去找該點（新發現的點）的四週，直到都沒有了，回去上一個 level 的動作 （Recursive）

### BFS
- 一個一個 level，水平的先去找 === ’1‘的點
  - 先把第一個點如 [0,0] 放進去要找的 queue 
  - 如果 [0,0] 的四週有任意一點也是 ‘1’ 的話，就把那點的值改成 ‘0’，同時要放進去 queue 
  - （先把單一點四週都先檢查完，如果有發現新的點也是 ‘1’ 的話，就把該點加進queue，之後才再檢查）
