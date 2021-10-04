class Solution {
  solve(nums) {
    let increasing = false;
    let decreasing = false;
    if (nums[0] == nums[1]) {
      return false;
    } else if (nums[0] < nums[1]) {
      increasing = true;
    } else {
      decreasing = true;
    }
    if (increasing == true) {
      for (let i = 2; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
          return false;
        }
      }
    } else {
      for (let i = 2; i < nums.length; i++) {
        if (nums[i] >= nums[i - 1]) {
          return false;
        }
      }
    }
    return true;
  }
}
//https://binarysearch.com/problems/Strictly-Increasing-or-Strictly-Decreasing
