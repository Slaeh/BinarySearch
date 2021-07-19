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
    let str = "";
    while (node) {
      str += node.val;
      node = node.next;
    }
    let res = parseInt(str, 2);
    return res;
  }
}
//https://binarysearch.com/problems/Linked-List-to-Integer
