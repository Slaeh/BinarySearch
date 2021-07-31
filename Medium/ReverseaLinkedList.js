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
    let dummy = null;
    let dummyPointer = dummy;
    while (node) {
      let nextNode = node.next;
      let current = node;
      node.next = dummyPointer;
      dummyPointer = current;
      node = nextNode;
    }
    return dummyPointer;
  }
}
//https://binarysearch.com/problems/Reverse-a-Linked-List
