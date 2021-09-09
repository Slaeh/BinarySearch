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
    for (let [k, v] of map.entries()) {
      if (v == 1) {
        return k;
      }
    }
  }
}
//https://binarysearch.com/problems/Lone-Integer
