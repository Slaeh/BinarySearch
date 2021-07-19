class Solution {
  solve(votes) {
    let set = new Set();
    for (let i in votes) {
      if (set.has(votes[i][1])) {
        return true;
      }
      set.add(votes[i][1]);
    }
    return false;
  }
}
//https://binarysearch.com/problems/Detect-Voter-Fraud
