class Solution {
  solve(n) {
    let parsed = n.toString(2);
    let res = 0;
    for (let i in parsed) {
      if (parsed[i] == 1) {
        res += 1;
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Number-of-Bits
