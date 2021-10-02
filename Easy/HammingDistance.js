class Solution {
  solve(x, y) {
    let res = 0;
    let xor = (x ^ y).toString(2);
    for (let i in xor) {
      if (xor[i] == "1") {
        res++;
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Hamming-Distance
