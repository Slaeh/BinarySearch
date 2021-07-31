class Solution {
  solve(nums) {
    for (let i in nums) {
      nums[i] = Math.pow(nums[i], 2);
    }
    return nums.sort((a, b) => a - b);
  }
}
//https://binarysearch.com/problems/Square-of-a-List
