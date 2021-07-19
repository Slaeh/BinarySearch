class Solution {
  solve(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums);
    let firstPointer = 0;
    let secondPointer = 1;
    let max = Number.NEGATIVE_INFINITY;
    max = nums[secondPointer] - nums[firstPointer];
    while (secondPointer != nums.length) {
      let curr = nums[secondPointer] - nums[firstPointer];
      max = Math.max(curr, max);

      firstPointer++;
      secondPointer++;
    }
    return max;
  }
}
//https://binarysearch.com/problems/Largest-Gap
