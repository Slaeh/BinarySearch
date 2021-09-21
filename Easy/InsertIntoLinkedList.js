/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
  solve(head, pos, val) {
    if (pos == 0) {
      let newNode = new LLNode(val, head);
      return newNode;
    } else {
      let counter = 0;
      let dum = new LLNode("dum", head);
      let dumPointer = dum;
      let pointer = head;
      while (counter != pos) {
        pointer = pointer.next;
        dumPointer = dumPointer.next;
        counter++;
        if (counter == pos) {
          let newNode = new LLNode(val);
          dumPointer.next = newNode;
          newNode.next = pointer;
          break;
        }
      }
      return dum.next;
    }
  }
}
//https://binarysearch.com/problems/Insert-Into-Linked-List
