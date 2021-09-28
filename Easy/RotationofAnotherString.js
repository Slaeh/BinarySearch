class Solution {
  solve(s0, s1) {
    return s0.length == s1.length && (s0 + s0).includes(s1);
  }
}
//https://binarysearch.com/problems/Rotation-of-Another-String
