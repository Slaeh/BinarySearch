/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
  solve(node) {
    if (node == null) {
      return null;
    }
    let res = new Tree(node.val);
    node = node.next;
    let pointer = res;
    while (node) {
      if (node.val >= pointer.val) {
        pointer.right = new Tree(node.val);
        pointer = pointer.right;
      } else {
        pointer.left = new Tree(node.val);
        pointer = pointer.left;
      }
      node = node.next;
    }
    return res;
  }
}
//https://binarysearch.com/problems/Linked-List-to-ZigZag-Tree-Path
