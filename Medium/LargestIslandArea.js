class Solution {
  solve(matrix) {
    let max = -1;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        max = Math.max(max, dfs(matrix, i, j));
      }
    }
    return max;
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
    return 0;
  }

  if (matrix[i][j] == 1) {
    let num = 1;
    matrix[i][j] = 0;
    num += dfs(matrix, i, j - 1);
    num += dfs(matrix, i, j + 1);
    num += dfs(matrix, i + 1, j);
    num += dfs(matrix, i - 1, j);
    return num;
  }
}
//https://binarysearch.com/problems/Largest-Island-Area
