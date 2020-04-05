const INPUT1 = [7,1,5,3,6,4]  //output: 7
const INPUT2 = [1,2,3,4,5]  //output: 4
const INPUT3 = [7,6,4,3,1]  //output: 0


/**
 * @param {number[]} prices
 * @return {number}
 */

// ruduce solution
// runtime: 60ms
const maxProfit = function(prices) {
  let profit = 0
  if(prices.length > 0){  // []
    prices.reduce((acc, next) => {
      if (next > acc) {
        profit += next - acc
      }
      return next
  })
  }
  return profit
};

// for loop solution
// runtime: 64ms
const maxProfitV2 = function(prices) {
  let profit = 0
  if(prices.length > 0){  // []
    for (let i = 0; i < prices.length; i++) {
      if(prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1]
    }
  }
  return profit
};


const result = maxProfitV2(INPUT1)
console.log(result)