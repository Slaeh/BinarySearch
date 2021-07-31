class Solution {
  solve(s) {
    let map = new Map();
    for (let i in s) {
      if (map.has(s[i])) {
        map.set(s[i], map.get(s[i]) + 1);
      } else {
        map.set(s[i], 1);
      }
    }
    let count = 0;
    for (let value of map.values()) {
      if (value % 2 == 1) {
        count++;
      }
    }
    if (count > 1) {
      return false;
    }
    return true;
  }
}
//https://binarysearch.com/problems/Palindromic-Anagram
