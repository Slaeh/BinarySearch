class Solution {
  solve(matrix) {
    if (matrix.length == 0) {
      return -1;
    }
    let spot = Infinity;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let pos = matrix[i].indexOf(1);
        if (pos != -1) {
          spot = Math.min(spot, pos);
        }
      }
    }
    if (spot == null || spot == Infinity) {
      return -1;
    }
    return spot;
  }
}
//https://binarysearch.com/problems/Binary-Matrix-Leftmost-One
