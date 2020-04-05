const INPUT = [-2,1,-3,4,-1,2,1,-5,4]
// O(n) solution
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
var maxSubArrayV4 = function(nums) {
  return findMaxSumInArr(nums)

  function findMaxSumInArr(arr) {
    if(arr.length === 1 ) return arr[0]
    if(arr.length === 0 ) return -Infinity

    let length = arr.length - 1
    let mid = Math.floor(length / 2)

    let lefMax = findMaxSumInArr(arr.slice(0, mid))
    let rightMax = findMaxSumInArr(arr.slice(mid + 1, length+1))

    let leftMaxContiguousSum = 0, rightMaxContiguousSum = 0

    // left part
    for (let i = mid - 1, currentContiguousSum = 0; i >= 0; i--){
      currentContiguousSum += arr[i];
      leftMaxContiguousSum = Math.max(leftMaxContiguousSum, currentContiguousSum);
    }

    //right part 
    for (let i = mid + 1, currentContiguousSum = 0; i <= length; i++){
      currentContiguousSum += arr[i];
      rightMaxContiguousSum = Math.max(rightMaxContiguousSum, currentContiguousSum);
   }

   return Math.max(
     leftMaxContiguousSum + arr[mid] + rightMaxContiguousSum,
     lefMax,
     rightMax
    )
  }
};



console.log(maxSubArrayV3(INPUT))
