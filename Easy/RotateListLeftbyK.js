class Solution {
  solve(nums, k) {
    let splice = nums.splice(0, k);
    nums.push(splice);
    return nums.flat();
  }
}
//https://binarysearch.com/problems/Rotate-List-Left-by-K
