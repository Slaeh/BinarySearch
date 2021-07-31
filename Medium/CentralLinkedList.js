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
    let fast = node;
    let slow = node;
    while (fast && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow.val;
  }
}
//https://binarysearch.com/problems/Central-Linked-List
