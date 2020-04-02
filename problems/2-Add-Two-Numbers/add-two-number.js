// Runtime: 112 ms
var addTwoNumbers = function(l1, l2) {
    
  let lastSum = arguments[2]
  let node = null
  // let head1 = l1, head2 = l2

  if(l1  || l2 ){
      
      const val1 = l1 ? l1.val : null
      const val2 = l2 ? l2.val : null
      const next1 = l1 ? l1.next : null
      const next2 = l2 ? l2.next : null
      const sum = lastSum ? val1+val2+1 : val1+val2

      node = new ListNode(sum % 10)
      node.next = addTwoNumbers(next1, next2, sum >= 10 )
  }else if (lastSum){
      node = new ListNode(1)
      node.next = null
  }

  return node
};