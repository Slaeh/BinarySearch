class Solution {
  solve(nums) {
    let pointer = 0;
    while (nums[pointer] <= 0) {
      pointer++;
    }
    if (nums[pointer] == null || nums[pointer] <= 0) {
      return 1;
    }
    let set = new Set();
    for (let i in nums) {
      set.add(nums[i]);
    }
    let arr = [...set];
    arr.sort((a, b) => a - b);
    for (let i = 1; i < arr[arr.length - 1]; i++) {
      if (!set.has(i)) {
        return i;
      }
    }
    return arr[arr.length - 1] + 1;
  }
}
//https://binarysearch.com/problems/First-Missing-Positive
