class Solution {
  solve(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i] = matrix[i].reverse();
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 1) {
          matrix[i][j] = 0;
        } else {
          matrix[i][j] = 1;
        }
      }
    }
    return matrix;
  }
}
//https://binarysearch.com/problems/Flip-and-Invert-Matrix
