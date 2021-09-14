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
  solve(root, val) {
    let arr = [];
    if (root) {
      dfs(root, arr);
    }
    if (arr.indexOf(val) == -1) {
      return false;
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
//https://binarysearch.com/problems/Search-in-a-Binary-Search-Tree
