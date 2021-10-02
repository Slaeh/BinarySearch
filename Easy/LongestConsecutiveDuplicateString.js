class Solution {
  solve(s) {
    if (s.length == 0) {
      return 0;
    }
    let res = 1;
    let currMax = 1;
    for (let i = 1; i < s.length; i++) {
      if (s[i] == s[i - 1]) {
        currMax++;
        res = Math.max(res, currMax);
      } else {
        res = Math.max(res, currMax);
        currMax = 1;
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Longest-Consecutive-Duplicate-String
