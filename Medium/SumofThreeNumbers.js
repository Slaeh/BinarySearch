class Solution {
  solve(nums, k) {
    if (nums.length < 3) {
      return false;
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
      let curr = nums[i];
      let first = i + 1;
      let last = nums.length - 1;
      while (first < last) {
        if (curr + nums[first] + nums[last] == k) {
          return true;
        } else if (curr + nums[first] + nums[last] < k) {
          first++;
        } else {
          last--;
        }
      }
    }
    return false;
  }
}
//https://binarysearch.com/problems/Sum-of-Three-Numbers
