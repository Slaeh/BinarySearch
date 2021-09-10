/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
  solve(node, target) {
    let sum = 0;
    let firstPass = node;
    while (firstPass) {
      if (firstPass.val == target) {
        sum++;
      }
      firstPass = firstPass.next;
    }
    let freq = sum;
    let dum = new LLNode(null, node);
    let dumPointer = dum;
    let secondPass = node;
    while (secondPass) {
      if (secondPass.val == target) {
        sum--;
      }
      if (sum == 0 && freq != 0) {
        let nextNode = secondPass.next;
        secondPass = nextNode;
        dumPointer.next = secondPass;
        dumPointer = dumPointer.next;
      } else {
        secondPass = secondPass.next;
        dumPointer = dumPointer.next;
      }
    }
    return dum.next;
  }
}
//https://binarysearch.com/problems/Linked-List-Delete-Last-Occurrence-of-Value
