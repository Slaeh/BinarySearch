class Solution {
  solve(n, friends) {
    let map = new Map();
    for (let i in friends) {
      for (let j in friends[i]) {
        map.set(friends[i][0], friends[i][1]);
        map.set(friends[i][1], friends[i][0]);
      }
    }
    for (let i = 0; i < n; i++) {
      if (!map.has(i)) {
        return false;
      }
    }
    return true;
  }
}
//https://binarysearch.com/problems/No-New-Friends
