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
    let set = new Set();
    let dummy = new LLNode("dummy", node);
    let dummyPointer = dummy;
    let curr = node;
    while (curr) {
      if (set.has(curr.val)) {
        dummyPointer.next = curr.next;
        curr = curr.next;
      } else {
        set.add(curr.val);
        dummyPointer = curr;
        curr = curr.next;
      }
    }
    return dummy.next;
  }
}

//https://binarysearch.com/problems/Remove-Duplicates-in-Linked-List
