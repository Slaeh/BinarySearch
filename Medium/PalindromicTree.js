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
    let reverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reverse.push(arr[i]);
    }
    arr = arr.join("");
    for (let i in arr) {
      if (arr[i] !== reverse[i]) {
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
  arr.push(root.val.toString());
  dfs(root.right, arr);
}
//https://binarysearch.com/problems/Palindromic-Tree
