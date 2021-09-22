class Solution {
  solve(n) {
    const dp = [1, 1];
    for (let i = 2; i <= n; i++) {
      dp[i] = (dp[i - 1] + dp[i - 2]) % (Math.pow(10, 9) + 7);
    }
    return dp[n];
  }
}
//https://binarysearch.com/problems/A-Flight-of-Stairs
