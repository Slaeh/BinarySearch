class Solution {
  solve(s, k) {
    let map = new Map();
    for (let i in s) {
      if (map.has(s[i])) {
        map.set(s[i], map.get(s[i]) + 1);
      } else {
        map.set(s[i], 1);
      }
    }
    let sorted = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
    let count = 0;
    let size = sorted.size;
    for (let [key, value] of sorted.entries()) {
      if (size > k) {
        count += value;
        size--;
      }
    }
    return count;
  }
}
//https://binarysearch.com/problems/K-Unique-String
