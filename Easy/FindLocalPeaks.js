class Solution {
  solve(nums) {
    if (nums.length == 1) {
      return [];
    }
    let res = [];
    for (let i = 1; i < nums.length - 1; i++) {
      if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
        res.push(i);
      }
    }
    if (nums[0] > nums[1]) {
      res.unshift(0);
    }
    if (nums[nums.length - 1] > nums[nums.length - 2]) {
      res.push(nums.length - 1);
    }
    return res;
  }
}
//https://binarysearch.com/problems/Find-Local-Peaks
