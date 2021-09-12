class Solution {
  solve(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
      let arr = [];
      let curr = nums[i];
      arr.push(nums[i]);
      let count = i + 1;
      while (nums[count] == curr) {
        arr.push(nums[i]);
        count++;
      }
      res.push(arr);
      i += arr.length - 1;
    }
    return res;
  }
}
//https://binarysearch.com/problems/Packing-Boxes
