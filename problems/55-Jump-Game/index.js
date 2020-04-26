/**
 * @param {number[]} nums
 * @return {boolean}
 */
// DP
// Runtime: 80 ms
var canJump = function(nums) {
  let goal = nums.length - 1 , idx = nums.length - 1
  while ( 0 <=--idx) {
    if(goal - idx <= nums[idx]) goal = idx
  }
  return goal === 0
};

