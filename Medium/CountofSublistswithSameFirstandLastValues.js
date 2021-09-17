class Solution {
  solve(nums) {
    let res = 0;
    let map = new Map();
    for (let i in nums) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1);
      } else {
        map.set(nums[i], 1);
      }
    }
    for (let [k, v] of map.entries()) {
      res += (v * (v + 1)) / 2;
    }
    return res;
  }
}
//https://binarysearch.com/problems/Count-of-Sublists-with-Same-First-and-Last-Values
