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
    let dummy = new LLNode("dum", node);
    let dumPointer = dummy.next;
    while (node) {
      let val = node.val;
      while (node && val != 0) {
        node = node.next;
        val--;
      }
      dumPointer.next = node;
      dumPointer = dumPointer.next;
    }
    return dummy.next;
  }
}
//https://binarysearch.com/problems/Linked-List-Jumps
