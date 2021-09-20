class Solution {
  solve(n) {
    let res = 1;
    while (n > 0) {
      res *= n;
      n--;
    }
    return res;
  }
}
//https://binarysearch.com/problems/N-Rooks
