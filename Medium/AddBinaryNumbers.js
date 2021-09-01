class Solution {
  solve(a, b) {
    let first = "0b" + a;
    let second = "0b" + b;
    let res = BigInt(first) + BigInt(second);
    return res.toString(2);
  }
}
//https://binarysearch.com/problems/Add-Binary-Numbers
