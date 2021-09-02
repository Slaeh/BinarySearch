class Solution {
  solve(nums) {
    let increasing;
    if (nums[1] > nums[0]) {
      increasing = true;
    } else {
      increasing = false;
    }
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] == nums[i - 1]) {
        return false;
      }
    }
    return increasing;
  }
}
//https://binarysearch.com/problems/Strictly-Alternating-List
