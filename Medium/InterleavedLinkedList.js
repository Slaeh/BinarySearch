/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
  solve(l0, l1) {
    if (!l0 && !l1) {
      return null;
    } else if (!l0) {
      return l1;
    } else if (!l1) {
      return l0;
    }
    let dummy = new LLNode(l0.val);
    let dummyPointer = dummy;
    l0 = l0.next;
    while (l0 || l1) {
      if (l1) {
        let newNode = new LLNode(l1.val);
        dummyPointer.next = newNode;
        dummyPointer = dummyPointer.next;
        l1 = l1.next;
      }
      if (l0) {
        let newNode = new LLNode(l0.val);
        dummyPointer.next = newNode;
        dummyPointer = dummyPointer.next;
        l0 = l0.next;
      }
    }
    return dummy;
  }
}
//https://binarysearch.com/problems/Interleaved-Linked-List
