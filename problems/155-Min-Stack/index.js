/**
 * initialize your datas structure here.
 */

 // runtime 100ms
const MinStack = function() {
  this.data = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.data.push({
    value: x,
    currentMin: (this.data.length === 0) ? x : Math.min(x, this.getMin())
  })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.data.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.data[this.data.length - 1].value
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.data[this.data.length - 1].currentMin
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */