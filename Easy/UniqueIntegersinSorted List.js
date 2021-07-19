class Solution {
  solve(nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
      if (!set.has(nums[i])) {
        set.add(nums[i]);
      }
    }
    return set.size;
  }
}
//https://binarysearch.com/problems/Unique-Integers-in-Sorted-List
