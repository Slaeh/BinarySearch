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
    if (!root) {
      return null;
    }
    let queue = [];
    let arr = [];
    queue.push(root);
    while (queue.length != 0) {
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let current = queue.shift();
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
        arr.push(current.val);
      }
    }
    let dum = new LLNode("dum", null);
    let dumPointer = dum;
    while (arr.length != 0) {
      let val = arr.shift();
      let newNode = new LLNode(val, null);
      dumPointer.next = newNode;
      dumPointer = dumPointer.next;
    }
    return dum.next;
  }
}
//https://binarysearch.com/problems/Level-Order-Binary-Tree-to-Linked-List
