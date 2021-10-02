class Solution {
  solve(intervals, point) {
    let res = 0;
    for (let i = 0; i < intervals.length; i++) {
      if (intervals[i][0] <= point && intervals[i][1] >= point) {
        res++;
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Intervals-Intersecting-at-Point
