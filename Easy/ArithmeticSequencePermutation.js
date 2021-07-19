class Solution {
  solve(nums) {
    nums.sort((a, b) => a - b);
    let first = 0;
    let second = 1;
    let maxDiff = nums[second] - nums[first];
    while (second != nums.length) {
      if (nums[second] - nums[first] != maxDiff) {
        return false;
      }
      first++;
      second++;
    }
    return true;
  }
}
//https://binarysearch.com/problems/Arithmetic-Sequence-Permutation
