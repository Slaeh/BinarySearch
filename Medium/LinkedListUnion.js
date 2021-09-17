/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
  solve(ll0, ll1) {
    let set = new Set();
    let first = ll0;
    let second = ll1;
    while (first) {
      set.add(first.val);
      first = first.next;
    }
    while (second) {
      if (!set.has(second.val)) {
        set.add(second.val);
      }
      second = second.next;
    }
    let arr = [...set];
    arr.sort((a, b) => a - b);
    let dum = new LLNode("dum", null);
    let dumPointer = dum;
    while (arr.length != 0) {
      let popped = arr.shift();
      let newNode = new LLNode(popped, null);
      dumPointer.next = newNode;
      dumPointer = dumPointer.next;
    }
    return dum.next;
  }
}
//https://binarysearch.com/problems/Linked-List-Union
