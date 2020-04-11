# [155. Min Stack](https://leetcode.com/problems/min-stack/)

## question

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

- push(x) -- Push element x onto stack.
- pop() -- Removes the element on top of the stack.
- top() -- Get the top element.
- getMin() -- Retrieve the minimum element in the stack.


**Example :**
```
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
```

## think
- 一開始有點想要用 class 的寫法
- 後來覺得那樣子太不OK了
- 把目前 attack 中的 min 放到該 index 的物件中
- e.g. [{value:10, min:10},{value: 6, min: 6}, {value: 12, min:6}, {value: -2, min:-2}]
- 這樣子就不需要在每次 getMin 的時侯才去計算 min 是什麼 