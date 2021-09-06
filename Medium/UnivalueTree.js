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
    let set = new Set();
    if (root) {
      dfs(root, set);
    }
    return set.size == 1;
  }
}
function dfs(root, set) {
  if (root == null) {
    return;
  }
  dfs(root.left, set);
  set.add(root.val);
  dfs(root.right, set);
  set.add(root.val);
}
//https://binarysearch.com/problems/Univalue-Tree
