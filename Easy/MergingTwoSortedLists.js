class Solution {
  solve(a, b) {
    let res = a.concat(b);
    return res.sort((a, b) => a - b);
  }
}
//https://binarysearch.com/problems/Merging-Two-Sorted-Lists
