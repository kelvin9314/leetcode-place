const INPUT = 19

/**
 * @param {number} num
 * @return {boolean}
 */




 
// var isHappy = function(n) {
//   if(n < 0 ) return

//   let isHappyNumberFounded = false
//   let currentArray = []
//   let currentNumber = null

//   // pass number to a number digits array
//   const praseNumberToDigitArray = (num) => {
//     let temp = []
//     const stringNum = num.toString()
//     for (let index = 0; index < stringNum.length; index++) {
//       temp = [...temp, +stringNum[index]]
//     }
//     return temp
//   }

//   const reducerOfSquares = (accumulator, currentValue) => Math.pow(accumulator,2) + Math.pow(currentValue,2)

//   // init array 
//   currentArray = praseNumberToDigitArray(n)
//   console.log(currentArray)
  
//   // process of  calculation 
//   while ( !isHappyNumberFounded ) {
     
//     let newValue = currentArray.reduce(reducerOfSquares)
//     console.log(newValue)

//     if(newValue === 1 ) {
//       isHappyNumberFounded = true
//       return true
//     } else if(newValue === currentNumber ){
//       isHappyNumberFounded = true
//       return false
//     } else {
//       currentNumber = newValue
//       currentArray = praseNumberToDigitArray(currentNumber)
//     }  
//   }
// };

var isHappyV2 = function(n) {
  n = [...(n + '')];
  let records = []
  let currentNumber = null
  let isFound = false
  
  while(!isFound){
    let count = 0;

    for(let j = 0; j < n.length; j++) {
      count += n[j] ** 2;
    }
    if (count === 1) return true;
    
    if(!records) {
      records = [count]
    } else {
      if(records.includes(count)) return false

      records = [...records, count]
    }
    n = [...(count + '')];
  }
};

const happyNumber = isHappyV2(2)
console.log(happyNumber)