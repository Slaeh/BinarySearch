class Solution {
  solve(nums) {
    if (nums.length == 2) {
      return nums[0] * nums[1];
    }
    nums.sort((a, b) => a - b);
    let lower = nums[0] * nums[1];
    let upper = nums[nums.length - 1] * nums[nums.length - 2];
    return Math.max(lower, upper);
  }
}
//https://binarysearch.com/problems/Max-Product-of-Two-Numbers
