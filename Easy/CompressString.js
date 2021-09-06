class Solution {
  solve(s) {
    let res = [];
    for (let i in s) {
      if (res[res.length - 1] != s[i]) {
        res.push(s[i]);
      }
    }
    return res.join("");
  }
}
//https://binarysearch.com/problems/Compress-String
