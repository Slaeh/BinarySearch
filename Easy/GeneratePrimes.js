class Solution {
  solve(n) {
    let arr = [];
    let check = true;
    for (let i = 2; i <= n; i++) {
      check = true;
      for (let j = 2; j < i - 1; j++) {
        if (i % j === 0) {
          check = false;
        }
      }
      if (check != false) arr.push(i);
    }
    return arr;
  }
}
//https://binarysearch.com/problems/Generate-Primes
