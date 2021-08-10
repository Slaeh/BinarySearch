class Solution {
  solve(nums) {
    let arr = [];
    let set = new Set(nums);
    for (let i = 1; i <= nums.length; i++) {
      if (!set.has(i)) {
        arr.push(i);
      }
    }
    return arr;
  }
}
//https://binarysearch.com/problems/Missing-Numbers-From-1-to-N
