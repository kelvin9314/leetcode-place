/**
 * @param {character[][]} grid
 * @return {number}
 */

// DFS in Recursive
// Runtime: 68 ms
const numIslandsDFS = (grid) => {
  let result = 0
  const checkPositionValidation = (row, col) => (row>=0 && row<=grid.length-1 && col>=0 && col<=grid[0].length-1)
  const dfs = ([x, y]) => {
    const neighbors = [ [1,0], [-1,0], [0,-1], [0,1]]
    for (const [neighborX, neighborY] of neighbors) {
      const nextX = x + neighborX
      const nextY = y + neighborY
      if(checkPositionValidation(nextX, nextY) && grid[nextX][nextY] === '1'){
        grid[nextX][nextY] = '0'
        dfs([nextX, nextY])
      }
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] === '1'){
        result ++
        dfs([row, col])
      }
    }
  }

  return result
};

// BFS
// Runtime: 64 ms
const numIslands = (grid) => {
  let result = 0

  const bfs = (startPoint) => {
    // queue , it will be a 2d array [[],[]]
    const queue = [startPoint]
    const checkPositionValidation = (row, col) => (row>=0 && row<=grid.length-1 && col>=0 && col<=grid[0].length-1)

    while (queue.length) {
      const [x, y] = queue.shift()
      const neighbors = [ [1,0], [-1,0], [0,-1], [0,1]]

      for (const [neighborX, neighborY] of neighbors) {
        const nextX = x + neighborX
        const nextY = y + neighborY
        if(checkPositionValidation(nextX, nextY) && grid[nextX][nextY] === '1'){
          grid[nextX][nextY] = '0'
          queue.push([nextX, nextY])
        }
      }
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] === '1'){
        grid[row][col] = '0'
        bfs([row, col])
        result++
      }
    }
  }

  return result
};


const INPUT1 = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]

console.log(numIslands(INPUT1))
