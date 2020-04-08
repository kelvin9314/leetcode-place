/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = arr => {
  const { length } = arr
  if( length < 1 || length > 1000) return 0
  let counter = 0

  let checkObj = arr.reduce((obj, item) => Object.assign(obj, { [item]: item }), {});

  arr.forEach(item => {
    if( 0 <= item && item <= 1000){
      if(checkObj[(item+1).toString()]) counter+=1
    }
  });

  return counter
}

// console.log(countElements([1,2,3]))
// console.log(countElements([1,1,3,3,5,5,7,7]))
console.log(countElements([1,3,2,3,5,0]))