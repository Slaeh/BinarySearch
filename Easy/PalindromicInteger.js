class Solution {
  solve(num) {
    let parsed = num.toString();
    return parsed === parsed.split("").reverse().join("");
  }
}
//https://binarysearch.com/problems/Palindromic-Integer
