class Solution {
  solve(s) {
    let res = [];
    let str = "";
    let left = 0;
    for (let i in s) {
      str += s[i];
      if (s[i] == "(") {
        left++;
      } else {
        left--;
      }
      if (left == 0) {
        res.push(str);
        str = "";
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Parentheses-Grouping
