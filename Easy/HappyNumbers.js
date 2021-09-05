class Solution {
  solve(n) {
    let map = new Map();
    while (n !== 1) {
      let parsed = n.toString().split("");
      let sum = 0;
      for (let i = 0; i < parsed.length; i++) {
        let num = Math.pow(parseInt(parsed[i]), 2);
        sum += num;
      }
      n = sum;
      if (map.has(n)) {
        return false;
      }
      map.set(n, 1);
    }
    return true;
  }
}
//https://binarysearch.com/problems/Happy-Numbers
