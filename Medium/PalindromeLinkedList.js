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
    let arr = [];
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr.join("") == arr.reverse().join("");
  }
}
//https://binarysearch.com/problems/Palindrome-Linked-List
