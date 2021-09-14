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
    let res = [];
    arr.push(root);
    while (arr.length) {
      let popped = arr.shift();
      res.push(popped.val);
      if (popped.left) {
        arr.push(popped.left);
      }
      if (popped.right) {
        arr.push(popped.right);
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Level-Order-Traversal
