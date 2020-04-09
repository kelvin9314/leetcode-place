const INPUTS = [
  ["ab#c", "ad#c"], 
  ["ab##", "c#d#"],
  ["a##c", "#a#c"],
  ["a#c","b"],
]
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

// runtime: 56ms
const backspaceCompare = (S, T) => {
  const {length:sLength} = S
  const {length:tLength} = T
  if( sLength < 1 || sLength > 200 || tLength < 1 || tLength > 200) return false
  const arr1 = [], arr2 = []
  S.split('').forEach(str => str!=='#' ? arr1.push(str) : arr1.pop())
  T.split('').forEach(str => str!=='#' ? arr2.push(str) : arr2.pop())

  return arr1.join('') === arr2.join('')
}


INPUTS.forEach(input => console.log(backspaceCompare(input[0], input[1])))

