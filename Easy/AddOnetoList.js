class Solution {
  solve(nums) {
    let str = "";
    for (let i in nums) {
      str += nums[i].toString();
    }
    let num = BigInt(str);
    num += BigInt("1");
    num = num.toString();
    let res = [];
    for (let i in num) {
      res.push(parseInt(num[i]));
    }
    return res;
  }
}
//https://binarysearch.com/problems/Add-One-to-List
