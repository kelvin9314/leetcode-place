const INPUT1 = ["eat", "tea", "tan", "ate", "nat", "bat"]
const INPUT2 = ["ray","cod","abe","ned","arc","jar","owl","pop","paw","sky","yup","fed","jul","woo","ado","why","ben","mys","den","dem","fat","you","eon","sui","oct","asp","ago","lea","sow","hus","fee","yup","eve","red","flo","ids","tic","pup","hag","ito","zoo"]

// const groupAnagrams = (strs) => {
//   if(strs.length === 0 ) return []

//   let groups = []
//   let res = []

//   // init with index zero
//   res = [...res, [strs[0]]]
//   let sortedStrArr = [...strs[0]].sort()
//   groups = [...groups, sortedStrArr]

//   const { length } = strs
//   for (let index = 1; index < length; index++) {
//     let current = strs[index]
//     let sortedCurrentArr = [...current].sort()
//     let isExists = false

//     for (const key in groups) {
//       // console.log(groups[key])
//       const {length: remainLength} = sortedCurrentArr.filter(str => groups[key].indexOf(str) === -1)
//       if(!remainLength && sortedCurrentArr.length === groups[key].length){
//         res[key] = [...res[key], current]
//         isExists = true
//         break
//       }
//     }
//     if(!isExists){
//       res = [...res, [current] ]
//       groups = [...groups, sortedCurrentArr]
//     }
//   }

//   return res
// }

// runtime: 132 ms
const groupAnagrams = strs => {
  const map = {};
  for (let str of strs) {
    const sorted = [...str].sort().join('')
    map[sorted] !== undefined ? map[sorted].push(str) : map[sorted] = [str];
  }
  return Object.values(map);
};

const result = groupAnagrams(INPUT1)
console.log(result)