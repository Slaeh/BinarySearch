class Solution {
  solve(nums) {
    let odds = [];
    let evens = [];
    for (let i in nums) {
      if (nums[i] % 2 == 1 || nums[i] % 2 == -1) {
        odds.push(nums[i]);
      } else {
        evens.push(nums[i]);
      }
    }
    evens.sort((a, b) => a - b);
    odds.sort((a, b) => b - a);
    let res = [];
    for (let i in nums) {
      if (nums[i] % 2 == 1 || nums[i] % 2 == -1) {
        res.push(odds.shift());
      } else {
        res.push(evens.shift());
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Mixed-Sorting
