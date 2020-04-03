const INPUT = [-2,1,-3,4,-1,2,1,-5,4]
// brute force solution, O(n3)
// Runtime: 52 ms
var maxSubArrayV1 = function(nums) {
  let current=nums[0]
  let result=nums[0]

  const { length } = nums

  for (let index = 1; index < length; index++) {
    const target = nums[index]
    current += target
  
    if(current < 0 || current < target) current = target
 
    if( result < current) result = current  
  }
  return result
};

var maxSubArrayV2 = function(nums) {
  let max = -Infinity;
  let currentMax = 0;
  
  for(let i = 0; i < nums.length; i++) {
      currentMax = Math.max(nums[i], currentMax + nums[i]);
      max = Math.max(currentMax, max);               
  }
  
  return max;
};

// Dynamic Programming
var maxSubArrayV3 = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums)
};

// Divide and Conquer：O(nlog n)

console.log(maxSubArrayV3(INPUT))
