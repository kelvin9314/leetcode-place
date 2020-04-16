# [678. Valid Parenthesis String](https://leetcode.com/problems/valid-parenthesis-string/)

## question

Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

1. Any left parenthesis '(' must have a corresponding right parenthesis ')'.
2. Any right parenthesis ')' must have a corresponding left parenthesis '('.
3. Left parenthesis '(' must go before the corresponding right parenthesis ')'.
4. '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
5. An empty string is also valid.


**Example1:**
```
Input: "()"
Output: True
```

**Example2:**
```
Input: "(*)"
Output: True
```

**Example3:**
```
Input: "(*))"
Output: True
```

**Note:** 
1. The string size will be in the range [1, 100].


## think

### Way3
> Greedy Algorithm ?
Let left be left parenthesis '('
Let right be right parenthesis ')'

每回合：
- 如果 str === '(' ,then left ++, else left--
- 如果 str ===')' ,then right--, else right++
- 當 right 出現負數，表示前方可能已經沒有任何 '(‘ 或 '*'了 --> break loop
- left 取自身和 0 的最大值，因為left是負數，即代表 right 也已經是負數

最後：
- 就要判斷 left 是否等於 0
  - yes: return true
  - no: return false （還有剩下的'('沒有被關上）   


### Way 2 (failed)
想說只是增加，再判斷 as pair 的條件

##failed**
`"((*)****)"`

### Way 1 (failed)
let last = string.length -1
let i = 0

looping:

從最左邊 index[i] 比對 最右邊的 index[last - i]  
合法的組合只有 4 種  
1. ()
2. *)
3. (*
4. **

如果 fail， return false

如果 pass, 就看看 i 跟 last - i 之間剩下的item 還有幾個  
  
如果 item 數量 == 1 ，就判斷是否為 * ， if yes ,then return ture, else return false

如果 item 數量 > 1, i++ 再 repeat

**failed**
沒有考量 `"(*()"` 像這樣子這種情境





