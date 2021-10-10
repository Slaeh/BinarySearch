class Solution {
  solve(a, b) {
    let map = new Map();
    for (let i in a) {
      map.set(a[i], map.get(a[i]) + 1 || 1);
    }
    let res = 0;
    for (let i in b) {
      if (map.has(b[i])) {
        res++;
        map.set(b[i], map.get(b[i]) - 1);
        if (map.get(b[i]) == 0) {
          map.delete(b[i]);
        }
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Longest-Anagram-Subsequence
