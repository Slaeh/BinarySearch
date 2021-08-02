class Solution {
  solve(heights) {
    if (heights.length == 0) {
      return heights;
    }
    if (heights.length == 1) {
      heights[0] = 0;
      return heights;
    }
    let res = [];
    let max = heights[heights.length - 1];
    res.push(heights.length - 1);
    for (let i = heights.length - 2; i >= 0; i--) {
      if (heights[i] > max) {
        res.push(i);
        max = heights[i];
      }
    }
    return res.reverse();
  }
}
//https://binarysearch.com/problems/Unobstructed-Buildings
