/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
  solve(head) {
    let max = Number.NEGATIVE_INFINITY;
    while (head) {
      if (head.val <= max) {
        return false;
      }
      max = head.val;
      head = head.next;
    }
    return true;
  }
}
//https://binarysearch.com/problems/A-Strictly-Increasing-Linked-List
