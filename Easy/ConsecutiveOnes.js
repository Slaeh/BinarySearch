class Solution {
  solve(nums) {
    let first = nums.indexOf(1);
    let last = nums.lastIndexOf(1);
    for (let i = first; i < last; i++) {
      if (nums[i] != 1) {
        return false;
      }
    }
    return true;
  }
}
//https://binarysearch.com/problems/Consecutive-Ones
