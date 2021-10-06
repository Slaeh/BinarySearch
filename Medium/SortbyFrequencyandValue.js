class Solution {
  solve(nums) {
    let map = new Map();
    for (let i in nums) {
      map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }
    nums.sort((a, b) => map.get(b) - map.get(a) || b - a);
    return nums;
  }
}
//https://binarysearch.com/problems/Sort-by-Frequency-and-Value
