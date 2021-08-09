class Solution {
  solve(nums) {
    let map = new Map();
    for (let i in nums) {
      map.set(nums[i], i);
    }
    for (let i in nums) {
      if (map.has(nums[i] * 3) && map.get(nums[i] * 3) !== i) {
        return true;
      }
    }
    return false;
  }
}
//https://binarysearch.com/problems/A-Number-and-Its-Triple
