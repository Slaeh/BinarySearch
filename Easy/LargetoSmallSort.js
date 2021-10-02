class Solution {
  solve(nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    while (nums.length > 0) {
      let max = nums.pop();
      let min = nums.shift();
      if (max != null) {
        res.push(max);
      }
      if (min != null) {
        res.push(min);
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Large-to-Small-Sort
