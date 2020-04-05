const INPUT = [0,1,0,3,12]
const INPUT2 = [2,1]

// In-place
// Runtime: 60ms
var moveZeroes = function(nums) {
  for (let x = 0; x < nums.length - 1; x++) {
    if(nums[x] === 0) {
      for (let y = x+1 ; y < nums.length; y++) {
        if(nums[y] !== 0){
          let temp = nums[x]
          nums[x] = nums[y]
          nums[y] = temp
          break
        }
      }
    }  
  }
  return nums
};

const result = moveZeroes(INPUT2)
console.log(result)