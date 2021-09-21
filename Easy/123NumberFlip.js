class Solution {
  solve(n) {
    let split = n.toString().split("");
    for (let i in split) {
      if (split[i] != "3") {
        split[i] = "3";
        break;
      }
    }
    return parseInt(split.join(""));
  }
}
//https://binarysearch.com/problems/123-Number-Flip
