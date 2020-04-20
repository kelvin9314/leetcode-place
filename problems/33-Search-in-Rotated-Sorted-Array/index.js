/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// Runtime: 88~116 ms
const searchV1 = (nums, target) => {

  let result = (nums.length !== 0 && nums.includes(target)) ? nums.indexOf(target) : -1

  return result
};

// binary tree
// Runtime: Runtime: 52 ms
const search = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if(nums[mid] === target) return mid

    // left side is sorted
    if(nums[left] <= nums[mid]){
      if(nums[left] <= target && target <= nums[mid]){
        right = mid - 1
      }else{
        left = mid + 1
      }
    }else{   // right side is sorted
      if(nums[mid] <= target && target <= nums[right]){
        left = mid + 1
      }else{
        right = mid - 1
      }
    }
  }

  return -1;
};

const INPUT1 = [4,5,6,7,0,1,2]
const INPUT2 = [4,5,6,7,0,1,2]
const INPUT3 = [5,1,3]

// console.log(search(INPUT1, 0))
// console.log(search(INPUT2, 3))
console.log(search(INPUT3, 3))

