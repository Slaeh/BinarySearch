class Solution {
  solve(nums) {
    if (nums.length == 1 && nums[0] != 0) {
      return -1;
    }
    let set = new Set();
    for (let i in nums) {
      set.add(nums[i]);
    }
    let max = -Infinity;
    for (let i in nums) {
      if (set.has(nums[i]) && set.has(nums[i] * -1) && nums[i] > max) {
        max = nums[i];
      }
    }
    if (max == -Infinity) {
      return -1;
    }
    return max;
  }
}
//https://binarysearch.com/problems/K-and-K
