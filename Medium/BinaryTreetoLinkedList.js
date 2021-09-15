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
  solve(root) {
    let arr = [];
    if (root) {
      dfs(root, arr);
    } else {
      return null;
    }
    let val = new LLNode(arr.shift(), null);
    let dum = new LLNode("dum", val);
    let dumPointer = val;
    while (arr.length != 0) {
      let val = arr.shift();
      let newNode = new LLNode(val, null);
      dumPointer.next = newNode;
      dumPointer = dumPointer.next;
    }
    return dum.next;
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
//https://binarysearch.com/problems/Binary-Tree-to-Linked-List
