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
    for (let v of map.values()) {
      if (v % 2 == 1) {
        return false;
      }
    }
    return true;
  }
}
//https://binarysearch.com/problems/Even-Frequency
