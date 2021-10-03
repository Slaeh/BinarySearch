class Solution {
  solve(nums, target) {
    nums.sort((a, b) => a - b);
    target.sort((a, b) => a - b);
    return JSON.stringify(nums) == JSON.stringify(target);
  }
}
//https://binarysearch.com/problems/Reverse-Sublists-to-Convert-to-Target
