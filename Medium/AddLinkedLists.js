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
    let first = [];
    let second = [];
    let firstPointer = l0;
    let secondPointer = l1;
    while (firstPointer) {
      first.unshift(firstPointer.val.toString());
      firstPointer = firstPointer.next;
    }
    while (secondPointer) {
      second.unshift(secondPointer.val.toString());
      secondPointer = secondPointer.next;
    }
    let num1 = BigInt(first.join(""));
    let num2 = BigInt(second.join(""));
    let res = (num1 + num2).toString().split("");
    let dummy = new LLNode("dummy", null);
    let dumPointer = dummy;
    while (res.length != 0) {
      let val = parseInt(res.pop());
      let newNode = new LLNode(val, null);
      dumPointer.next = newNode;
      dumPointer = newNode;
    }
    return dummy.next;
  }
}
//https://binarysearch.com/problems/Add-Linked-Lists
