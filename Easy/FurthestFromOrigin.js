class Solution {
  solve(s) {
    let marks = 0;
    let count = 0;
    for (let i in s) {
      if (s[i] == "L") {
        count--;
      } else if (s[i] == "R") {
        count++;
      } else {
        marks++;
      }
    }
    return Math.abs(count) + marks;
  }
}
//https://binarysearch.com/problems/Furthest-From-Origin
