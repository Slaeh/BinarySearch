class Solution {
  solve(nums) {
    let set = new Set();
    for (let i in nums) {
      if (set.has(nums[i])) {
        return nums[i];
      } else {
        set.add(nums[i]);
      }
    }
  }
}
//https://binarysearch.com/problems/Detect-the-Only-Duplicate-in-a-List
