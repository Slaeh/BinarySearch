class Solution {
  solve(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (stack[stack.length - 1] !== s.charAt(i)) {
        stack.push(s.charAt(i));
      }
    }
    return stack.join("");
  }
}
//https://binarysearch.com/problems/Consecutive-Duplicates
