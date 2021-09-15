class Solution {
  solve(nums) {
    let map = new Map();
    for (let i in nums) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1);
      } else {
        map.set(nums[i], 1);
      }
    }
    let sorted = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    let count = nums.length;
    let half = nums.length / 2;
    let res = 0;
    for (let [k, v] of sorted.entries()) {
      if (count > half) {
        count -= v;
        res++;
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Remove-Half-of-the-List
