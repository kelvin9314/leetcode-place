/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// runtime: 152 ms
const rangeBitwiseAnd = (m, n) => {
  let shiftTimes = 0

  while (m !== n) {
    // right shift
    m >>=1
    n >>=1
    shiftTimes+=1
  }
  // left shift
  return ( m <<= shiftTimes)
};
