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
    return;
  }
  if (
    (root.left != null && root.right == null) ||
    (root.left == null && root.right != null)
  ) {
    arr[0] += 1;
  }
  dfs(root.left, arr);
  dfs(root.right, arr);
}
//https://binarysearch.com/problems/Only-Child
