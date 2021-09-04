class Solution {
  solve(nums) {
    let res = [];
    let map = new Map();
    for (let i in nums) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1);
      } else {
        map.set(nums[i], 1);
      }
    }
    if (map.has(0) && map.get(0) > 1) {
      return nums.fill(0, 0, nums.length);
    }
    let product = 1;
    for (let i in nums) {
      if (nums[i] != 0) {
        product *= nums[i];
      }
    }
    for (let i in nums) {
      if (nums[i] == 0) {
        res.push(product);
      } else if (map.get(0) == 1) {
        res.push(0);
      } else {
        let newProduct = product;
        newProduct /= nums[i];
        res.push(newProduct);
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Special-Product-List
