const INPUT = [-2,1,-3,4,-1,2,1,-5,4]
// 暴力法 O(n3)
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
// 改良式暴力法：O(n2)

// Divide and Conquer：O(nlog n)

// Kadane's演算法：O(n)

console.log(maxSubArrayV1(INPUT))
