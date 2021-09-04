class Solution {
  solve(nums, k) {
    let sum = 0;
    let len = nums.length;
    for (let i in nums) {
      sum += nums[i];
    }
    for (let i in nums) {
      let copySum = sum;
      copySum -= nums[i];
      if (copySum / (len - 1) == k) {
        return true;
      }
    }
    return false;
  }
}
//https://binarysearch.com/problems/Just-Average
