// Runtime: 108 ms
var twoSumV1 = function(nums, target) {
  const length =  nums.length
  
  for( let i=0 ; i < length-1 ; i+=1){
      for( let j=i+1 ; j < length ; j+=1 ){
          
          if( (nums[i]+nums[j]) === target){
              return [i,j]
          }
      }
  }
};

// Runtime: 60 ms
var twoSumV2 = function(nums, target) {
  const hashMap = {}
  const length =  nums.length
  
  for (let i = 0 ; i < length ; i+=1){
      
      const value = nums[i]
      
      if(hashMap[target - value] >= 0) {
          return [hashMap[target - value], i]
      }else{
          hashMap[value] = i
      }
  }
  
};