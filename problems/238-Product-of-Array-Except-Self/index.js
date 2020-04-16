/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Runtime: 84 ms
const productExceptSelf = (nums) => {
  let left = [], right = [], ans =[]
  let { length } = nums
  // init
  left[0] = nums[0]
  right[length-1] = nums[length-1]

  for (let i = 1; i < length; i++) {
    left[i] = nums[i] * left[i - 1]
  }

  for (let j = length-2 ; j >= 0; j--) {
    right[j] = nums[j] * right[j+1]
  }

  ans[0] = right[1]
  ans[length-1] = left[length-2]
  for (let idx = 1; idx < length - 1; idx++) {
    ans[idx] = left[idx-1] * right[idx+1]
  }

  return ans
};

const INPUT = [1,2,3,4]
console.log(productExceptSelf(INPUT))