/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
  solve(node, k) {
    let res = 0;
    let pointer = node;
    while (pointer) {
      pointer = pointer.next;
      res++;
    }
    let index = res - k;
    let counter = 0;
    while (counter != index - 1) {
      node = node.next;
      counter++;
    }
    return node.val;
  }
}
//https://binarysearch.com/problems/Kth-Last-Node-of-a-Linked-List
