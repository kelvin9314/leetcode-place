/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
// Brute force with Optimization: O(N+M)
// Runtime: 52 ms
const leftMostColumnWithOneV1 = (binaryMatrix) => {
  const [row, col] = binaryMatrix.dimensions();
  let index = -1;
  for (let r = 0, c = col - 1; r < row && c >= 0; ) {
    if (binaryMatrix.get(r, c) == 1) {
      index = c;
      c--;
    } else {
      r++;
    }
  }
  return index;
};

// Binary Search
// const leftMostColumnWithOne = (binaryMatrix) => {
//   const [rows, cols] = binaryMatrix.dimensions();
//   let result = cols


//   for (let row = 0; row < rows; row++) {
//     let left = 0
//     let right = cols
//     if( binaryMatrix.get(row, right - 1) == 0 )  continue

//     while (left < right) {
//       let middle = Math.floor((left+right) / 2)
//       if(binaryMatrix.get(row, middle) == 1){
//         right = middle
//       } else {
//         left = middle + 1
//       }
//     }

//     result = left
//     if(result == 0) return result

//   }

//   return (result == cols ) ? -1 : result
// };

// (Optimal Approach) Imagine there is a pointer p(x, y) starting from top right corner. p can only move left or down. If the value at p is 0, move down. If the value at p is 1, move left. Try to figure out the correctness and time complexity of this algorithm.
