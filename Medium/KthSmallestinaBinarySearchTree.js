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
  solve(root, k) {
    let arr = [];
    if (root) {
      dfs(root, arr);
    }
    return arr[k];
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
//https://binarysearch.com/problems/Kth-Smallest-in-a-Binary-Search-Tree
