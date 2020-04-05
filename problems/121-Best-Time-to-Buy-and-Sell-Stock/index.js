const INPUT1 = [7,1,5,3,6,4]  //output: 5
const INPUT2 = [7,6,4,3,1]  //output: 0

/**
 * @param {number[]} prices
 * @return {number}
 */

 // runtime: 312ms
var maxProfit = function(prices) {
  let profit = 0
  for (let x = 0; x < prices.length - 1; x++) {
    let buyPrice = prices[x]
    for (let y = x + 1 ; y < prices.length; y++) {
      if(buyPrice < prices[y] && (profit < (prices[y] - buyPrice))) profit = prices[y] - buyPrice
    }
  }
  return profit
};

// runtime: 58ms
var maxProfitV2 = function(prices) {
  let buyPrice = prices[0]
  return prices.reduce((acc, curr) => {
    // console.log(acc, curr, buyPrice)
    if (buyPrice > curr ) {
        buyPrice = curr;
    } else if (curr - buyPrice > acc) {
        return curr - buyPrice;
    }

    return acc;
  }, 0)
};

// runtime: 60ms
var maxProfitV3 = function(prices) {
  let len = prices.length;
  let curr = prices[0];
  let maxPro = 0;
  
  for (let i=0; i< len; i++){
    if (prices[i] > curr && (prices[i]-curr > maxPro) ){
      maxPro = prices[i] - curr;
    }
    if (prices[i] < curr){
      curr = prices[i];
    }
  }
  
  return maxPro;
};


const result = maxProfitV3(INPUT1)
console.log(result)