
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

// Runtime: 56 ms
const bstFromPreorderV1 = (preorder) => {
  const { length } = preorder
  if(length === 0) return null

  // init first node
  let head = new TreeNode(preorder[0])
  if(length === 1) return head

  for (let i = 1; i < length; i++) {
    head = insertNode(head, preorder[i])
  }
  return head

};

function insertNode(node, num) {
  if(node === null) return new TreeNode(num)

  if(num < node.val){
    node.left = insertNode(node.left, num)
  }else{
    node.right = insertNode(node.right, num)
  }
  return node
}


const bstFromPreorderV2 = (preorder) => {


};

const INPUT1 = [8,5,1,7,10,12]

console.log(bstFromPreorder(INPUT1))
