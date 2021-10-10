class Solution {
  solve(words) {
    for (let i in words) {
      words[i] = words[i].split("").sort().join("");
    }
    let map = new Map();
    for (let i in words) {
      map.set(words[i], map.get(words[i]) + 1 || 1);
    }
    let max = -Infinity;
    for (let [k, v] of map.entries()) {
      if (v > max) {
        max = v;
      }
    }
    return max;
  }
}
//https://binarysearch.com/problems/Largest-Anagram-Group
