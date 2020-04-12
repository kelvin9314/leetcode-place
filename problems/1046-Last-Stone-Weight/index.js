/**
 * @param {number[]} stones
 * @return {number}
 */

// v2
// runtime: 30ms
const lastStoneWeight = (stones) => {
  if(!stones || stones.length === 0 ) return 0

  while (stones.length > 1) {
    stones.sort((a,b) => b-a)
    let x = stones.shift() - stones.shift()
    stones = [...stones, x]
  }
  return stones[0]
}; 

const result = lastStoneWeight([2,7,4,1,8,1])
// const result = lastStoneWeight([2,2])
console.log(result)



// v1 fail
/* const lastStoneWeight = (stones) => {
  const findMaxAndIndex = arr => Math.max(...arr)
  const removeItemFromArr = (arr, target) => arr.filter(i => i !== target)

  while (stones.length > 1) {
    let tempArr = [...stones]
    let y = findMaxAndIndex(tempArr)
    tempArr = removeItemFromArr(tempArr, y)
    let x = findMaxAndIndex(tempArr)
    stones = removeItemFromArr(stones, x)
    console.log(stones)
    if(stones.length){
      if(x !== y) stones = stones.map( num => num === y ? num - x : num)
    }
    
  }
  return stones[0] || 0
}; */
