/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n)
// Runtime: 152 ms
const findMaxLength = (nums) => {
  if (nums.length < 2 ) return 0
  let hash = {0: -1}
  let sum = 0
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    sum += (nums[i] ? 1 : -1)
    if(sum == 0) ans = Math.max(ans, i + 1)
    else if (hash[sum] != null) {
      ans = Math.max(ans, i - hash[sum])
    }else {
      hash[sum] = i
    }
  }
  return ans
};

// console.log(findMaxLength([0,1]))
console.log(findMaxLength([0,1,0]))
// console.log(findMaxLength([0,0,1]))