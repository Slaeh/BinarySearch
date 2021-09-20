class Solution {
  solve(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
      let parsed = i.toString();
      if (
        i % 3 == 0 ||
        parsed.includes("3") ||
        parsed.includes("6") ||
        parsed.includes("9")
      ) {
        res.push("clap");
      } else {
        res.push(i.toString());
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/3-6-9
