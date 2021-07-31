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
    let dummy = new LLNode("dummy", node);
    let dummyPointer = dummy;
    if (node == null || node.next == null) {
      return node;
    }
    while (node && node.next != null) {
      let curr = node;
      let nextNode = node.next;
      let afterNext = nextNode.next;
      dummyPointer.next = nextNode;
      nextNode.next = curr;
      curr.next = afterNext;
      node = afterNext;
      dummyPointer = dummyPointer.next.next;
    }
    return dummy.next;
  }
}
//https://binarysearch.com/problems/Pairwise-Linked-List-Swap
