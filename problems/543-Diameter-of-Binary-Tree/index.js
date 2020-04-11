/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// runtime: 68ms
const diameterOfBinaryTree = function(root) {
  let diameter = 0
  const toFindMaxDepth = (node) => {
    if(!node) return 0
  
    const leftPath = toFindMaxDepth(node.left)
    const rightPath = toFindMaxDepth(node.right)
  
    diameter = Math.max(diameter, leftPath+rightPath)
    return Math.max(leftPath, rightPath) + 1
  }

  toFindMaxDepth(root)
  return diameter
};

