class Solution {
  solve(s) {
    let res = [];
    let counter = 1;
    for (let i = 1; i <= s.length; i++) {
      if (s[i] == s[i - 1]) {
        counter++;
      } else {
        res.push(counter);
        res.push(s[i - 1]);
        counter = 1;
      }
    }
    return res.join("");
  }
}
//https://binarysearch.com/problems/Run-Length-Encoding
