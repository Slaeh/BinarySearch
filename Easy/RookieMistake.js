class Solution {
  solve(s) {
    if (s[0] == "B" && s[s.length - 1] == "B") {
      return false;
    }
    let pos = s.indexOf("R");
    if (pos == 0 || pos == s.length - 1) {
      return true;
    }
    let left = true;
    let right = true;
    for (let i = pos + 1; i < s.length; i++) {
      if (s[i] == "B") {
        right = false;
        break;
      }
    }
    for (let i = 0; i < pos; i++) {
      if (s[i] == "B") {
        left = false;
      }
    }
    return right || left;
  }
}
//https://binarysearch.com/problems/Rookie-Mistake
