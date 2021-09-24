class Solution {
  solve(arr) {
    while (arr[0] <= 0) {
      arr.shift();
    }
    if (arr[0] != 1) {
      return 1;
    }
    let count = 2;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] != count) {
        return count;
      }
      count++;
    }
    return arr[arr.length - 1] + 1;
  }
}
//https://binarysearch.com/problems/First-Missing-Positive-Sequel
