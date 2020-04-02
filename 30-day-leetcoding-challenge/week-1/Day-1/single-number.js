// Runtime 64ms
var singleNumberV1 = function(nums) {
  const checkMap = {}

  nums.map(num => {
    if(!checkMap[num]){
      checkMap[num] = 1 
    }else {
      checkMap[num] +=1
    }
  })
  
  let result = null
  for (const index in checkMap) {
    if(checkMap[index] === 1 ) result = index 
  }

  return result
};

const result = singleNumber(setB)
console.log(result)