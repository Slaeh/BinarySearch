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
  solve(root0, root1) {
    if (root0 == null && root1 == null) {
      return true;
    }
    if (root0 == null || root1 == null) {
      return false;
    }
    if (root0.val != root1.val) {
      return false;
    }
    return (
      this.solve(root0.left, root1.left) && this.solve(root0.right, root1.right)
    );
  }
}
//https://binarysearch.com/problems/Twin-Trees
