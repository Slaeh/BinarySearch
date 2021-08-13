class Solution {
  solve(s) {
    let arr = [];
    for (let i in s) {
      let num = s[i];
      if (num >= "a" && num <= "z") {
        arr.push(num);
      }
    }
    return arr.join("") == arr.reverse().join("");
  }
}
//https://binarysearch.com/problems/Noisy-Palindrome
