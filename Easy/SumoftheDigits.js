class Solution {
  solve(num) {
    let sum = 0;
    let parsed = num.toString();
    for (let i = 0; i < parsed.length; i++) {
      sum += parseInt(parsed[i]);
    }
    return sum;
  }
}
//https://binarysearch.com/problems/Sum-of-the-Digits
