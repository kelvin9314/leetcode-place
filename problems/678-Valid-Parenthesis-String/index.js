/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {
  let left =0, right = 0

  for (const str of s) {
    left += ( str === '(' ? 1 : -1 )
    right += ( str === ')' ? -1 : 1 )
    if(right < 0) break
    left = Math.max(left, 0)
  }
  return left === 0
}


const INPUT1 ="()"
const INPUT2 ="(*)"
const INPUT3 ="(*))"
const INPUT4 ="(*()"
const INPUT5 ="()*()"
const INPUT6 =")*()"
const INPUT7 ="*)*()"
const INPUT8 ="*())*()"
const INPUT9 ="*()()*()"
const INPUT10 ="((*)****)"

console.log(checkValidString(INPUT10))

// const checkValidString = (s) => {
//   const VALID_COMBINATION = ["()", "(*", "*)", "**",]

//   return checkInside(s) || checkAsPair(s)

//   function checkAsPair(s){
//     let arr = [...s]
//     for (let idx = 0; idx < arr.length;){
//       let current = `${arr[idx]}${arr[idx+1]}`
//       console.log(current)
//       if(VALID_COMBINATION.includes(current)){
//         idx+=2
//       }else{
//         if(arr[idx]==="*"){
//           idx +=1
//         }else{
//           return false
//         }
//       }
//     }
//     return true
//   }

//   function checkInside (s) {
//     let arr = [...s]
//     while(arr.length >= 2){
//       let current = `${arr[0]}${arr[arr.length-1]}`
//       if(VALID_COMBINATION.includes(current)){
//         arr.shift()
//         arr.pop()
//       }else{
//         return false
//       }
//     }
//     if(arr.length === 0 ) return true
//     if(arr.length === 1 ) return  (arr[0] === "*") ? true : false
//   }

// };