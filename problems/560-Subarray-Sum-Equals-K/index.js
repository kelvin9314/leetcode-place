// var subarraySum = function (nums, k) {
//   let max = 0;
//   let subSumMap = [...nums];
//   for (let i = 1; i < subSumMap.length; i++) {
//     subSumMap[i] = subSumMap[i] + subSumMap[i - 1];
//   }

//   for (let i = 0; i < subSumMap.length; i++) {
//     let start = subSumMap[i];
//     if (start == k) {
//       max === 0 ? (max += 1) : max;
//       continue;
//     }
//     if (start > k) continue;

//     let currentSum = 0;
//     for (let j = i + 1; j < subSumMap.length - 1; ) {
//       currentSum = i >= 1 ? subSumMap[j] - subSumMap[i - 1] : subSumMap[j];
//       console.log(currentSum);
//       if (currentSum == k) {
//         console.log(j, i);
//         let currentCount = j - i + 1;
//         max = max < currentCount ? currentCount : max;
//         break;
//       } else if (currentSum < k) {
//         j += 1;
//       } else {
//         break;
//       }
//     }
//   }
//   console.log(max);
//   return max;
// };

// Brute Force
// Runtime: 332 ms
const subarraySumBF = (nums, k) => {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    let base = 0;
    for (let j = i; j < nums.length; j++) {
      base += nums[j];
      if (base == k) counter++;
    }
  }
  return counter;
};

//Hash map O(N)
//Runtime: 68 ms
const subarraySum = (nums, k) => {
  let hash = new Map();
  let sum = 0;
  let count = 0;
  hash.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    // (sum_current - sum_prev = k ) == (sum_current - k = sum_prev )
    if (hash.has(sum - k)) count += hash.get(sum - k);
    if (hash.has(sum)) hash.set(sum, hash.get(sum) + 1);
    else hash.set(sum, 1);
  }
  return count;
};

// let nums = [1, 1, 1],
//   k = 2;
// let nums = [1, 2, 1, 2, 1],
//   k = 3;
let nums = [28, 54, 7, -70, 22, 65, -6],
  k = 100;
subarraySum(nums, k);
