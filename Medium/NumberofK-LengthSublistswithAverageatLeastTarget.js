class Solution {
  solve(nums, k, target) {
    let res = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
      sum += nums[i];
    }
    if (sum / k >= target) {
      res++;
    }
    let first = 0;
    let second = k;
    while (second != nums.length) {
      sum -= nums[first];
      first++;
      sum += nums[second];
      if (sum / k >= target) {
        res++;
      }
      second++;
    }
    return res;
  }
}
//https://binarysearch.com/problems/Number-of-K-Length-Sublists-with-Average-at-Least-Target
