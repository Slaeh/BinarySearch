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
    let arr = [0];
    if (root) {
      dfs(root, arr);
    }
    return arr[0];
  }
}
function dfs(root, arr) {
  if (root == null) {
    return 0;
  }
  dfs(root.left, arr);
  arr[0] += root.val;
  dfs(root.right, arr);
}
//https://binarysearch.com/problems/Tree-Sum
