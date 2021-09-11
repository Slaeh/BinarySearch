/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
class Solution {
  solve(root) {
    let arr = [];
    if (root) {
      traverse(root, arr);
    }
    return arr;
  }
}

function traverse(root, arr) {
  if (root == null) {
    return;
  }
  traverse(root.left, arr);
  arr.push(root.val);
  traverse(root.right, arr);
}
//https://binarysearch.com/problems/Inorder-Traversal
