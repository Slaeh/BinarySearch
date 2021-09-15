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
      dfs(root, arr);
    }
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
}
function dfs(root, arr) {
  if (root == null) {
    return;
  }
  dfs(root.left, arr);
  arr.push(root.val);
  dfs(root.right, arr);
}
//https://binarysearch.com/problems/Binary-Search-Tree-Validation
