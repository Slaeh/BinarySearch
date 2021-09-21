class Solution {
  solve(nums) {
    let res = -1;
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      if (nums[middle] == middle) {
        res = middle;
        end = middle - 1;
      } else if (nums[middle] > middle) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Fixed-Point
