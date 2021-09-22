class Solution {
  solve(nums) {
    let map = new Map();
    for (let i in nums) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1);
      } else {
        map.set(nums[i], 1);
      }
    }
    let res = [];
    for (let i in nums) {
      if (map.get(nums[i]) == 1) {
        res.push(nums[i]);
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Remove-Duplicate-Numbers
