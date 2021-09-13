class Solution {
  solve(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 1) {
          count++;
          dfs(matrix, i, j);
        }
      }
    }
    return count;
  }
}
function dfs(matrix, i, j) {
  if (
    i < 0 ||
    i >= matrix.length ||
    j < 0 ||
    j >= matrix[i].length ||
    matrix[i][j] == 0
  ) {
    return;
  }
  matrix[i][j] = 0;
  dfs(matrix, i + 1, j);
  dfs(matrix, i - 1, j);
  dfs(matrix, i, j + 1);
  dfs(matrix, i, j - 1);
}
//https://binarysearch.com/problems/Number-of-Islands
