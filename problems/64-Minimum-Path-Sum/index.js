/**
 * @param {number[][]} grid
 * @return {number}
 */
// DP
// Runtime: 44 ms
const minPathSum = (grid) => {
  if (!grid || grid.length === 0 || !grid[0]) return 0
  const row = grid.length, col = grid[0].length
  //init the first row
  for (let x = 1; x < col; x++){
    grid[0][x] = grid[0][x] + grid[0][x-1]
  }
  //init the first column
  for (let x = 1; x < row; x++){
    grid[x][0] = grid[x][0] + grid[x-1][0]
  }

  for (let x = 1; x < row; x++) {
    for (let y = 1; y < col; y++) {
      grid[x][y] = grid[x][y] + Math.min(grid[x-1][y], grid[x][y-1])
    }
  }
  return grid[row-1][col-1]
};

const INPUT1 = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]

const INPUT2 = [[1,2,5],[3,2,1]]

console.log(minPathSum(INPUT2))
