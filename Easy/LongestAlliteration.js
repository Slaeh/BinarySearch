class Solution {
  solve(words) {
    if (words.length == 0) {
      return 0;
    }
    if (words.length == 1) {
      return 1;
    }
    let max = -Infinity;
    let curr = 1;
    for (let i = 1; i < words.length; i++) {
      if (words[i][0] == words[i - 1][0]) {
        curr++;
        max = Math.max(curr, max);
      } else {
        max = Math.max(curr, max);
        curr = 1;
      }
    }
    return max;
  }
}
//https://binarysearch.com/problems/Longest-Alliteration
