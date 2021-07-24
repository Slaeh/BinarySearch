class Solution {
  solve(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) == "(") {
        stack.push("(");
      } else if (s.charAt(i) == ")") {
        if (stack.length == 0 || stack.pop() != "(") {
          return false;
        }
      }
    }
    return stack.length != 0 ? false : true;
  }
}

//https://binarysearch.com/problems/Balanced-Brackets
