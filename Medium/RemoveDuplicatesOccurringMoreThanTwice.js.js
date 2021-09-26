class Solution {
  solve(nums) {
    let map = new Map();
    for (let i in nums) {
      if (map.has(nums[i]) && map.get(nums[i]) < 2) {
        map.set(nums[i], map.get(nums[i]) + 1);
      } else if (!map.has(nums[i])) {
        map.set(nums[i], 1);
      }
    }
    let res = [];
    for (let i in nums) {
      if (map.has(nums[i])) {
        res.push(nums[i]);
        map.set(nums[i], map.get(nums[i]) - 1);
        if (map.get(nums[i]) == 0) {
          map.delete(nums[i]);
        }
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Remove-Duplicates-Occurring-More-Than-Twice
