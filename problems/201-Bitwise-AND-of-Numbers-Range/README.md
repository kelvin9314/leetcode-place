# [201. Bitwise AND of Numbers Range](https://leetcode.com/problems/subarray-sum-equals-k/)

## question

Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

Example 1:
```
Input: [5,7]
Output: 4
```

Example 2:
```
Input: [0,1]
Output: 0
```

## think
1. 把 M 和 N 轉成 binary 後
2. 一直向右 shift （K 次），去掉右邊的 bit ，直剩下的 M 和 N 是等於的
3. IF 有 M == N, 再住左 shift K 次 去補 0，就可以等到答案
4. ELSE  return 0

110000 
110001
110001
...
..
.
111111

**在最左邊的是完全等於前，右邊的 bits 會從N個0到N個1的組合，代表這些在做 AND 也都還是 0**


---

```javascript
function numToBinary(num, len) {
  let binNum = num.toString(2)
  return binNum.padStart(len,0)
}

let {length} = numToBinary(2147483647)

//...

```

一開始定義一個把 number 轉成 binary string, 再在前方補上 x 個‘0’ 的 function  
把題目可能的最大值*2147483647*進去，轉換後取得最大值的長度 Z，其他的數字補 ‘0’ 也補上這個長度 Z

---

後來想了一下才發現這個做法不行，然後才在 MDN javascript 運算式與運算子的文件中，找到*位元運算子*的應用


- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Right_shift_assignment
