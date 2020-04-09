/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// runtime: 52ms
const middleNode = head => {
  const middleNode = head => {
    let counter=0;
    let currnetNode = head
    
    while(currnetNode){
        currnetNode = currnetNode.next
        counter +=1
    }
    let middle = Math.floor(counter / 2)
    console.log(middle)

    while(middle){
        head = head.next
        middle -=1
    }

  return head
}
}