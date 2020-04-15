/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
// Runtime: 52 ms
const stringShift = (s, shift) => {
  let count = 0
  let arr = [...s]
  let length = arr.length

  shift.forEach(item =>{
    count += (item[0]) ? item[1] : -item[1]
  })
  if (count === 0 ) return s
  if (count > 0){ // right shift
    count = count% length
    let movedPart = arr.slice(length - count, length)
    arr.splice(length - count, count)
    return  [...movedPart, ...arr].join('')
  }else {
    let temp =  Math.abs(count) % length
    let movedPart = arr.slice(0 , temp)
    arr.splice(0, temp)
    return [...arr,...movedPart].join('')
  }
};

// console.log(stringShift( "abcdef", [[0,1],[1,2]]))
// console.log(stringShift( "abcdefg",[[1,1],[1,1],[0,2],[1,3]]))
// console.log(stringShift( "abcdefg", [[1,1],[1,1],[0,2],[1,3]]))
// console.log(stringShift( "wpdhhcj", [[0,7],[1,7],[1,0],[1,3],[0,3],[0,6],[1,2]]))
// console.log(stringShift( "wpdhhcj", [[0,7],[1,7],[1,0],[1,3],[0,3],[0,6],[1,2]]))

const INPUT1 = "xqgwkiqpif"
const INPUT2 =[[1,4],[0,7],[0,8],[0,7],[0,6],[1,3],[0,1],[1,7],[0,5],[0,6]]
console.log(stringShift( INPUT1, INPUT2))