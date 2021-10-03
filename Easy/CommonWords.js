class Solution {
  solve(s0, s1) {
    if (s0 == "" || s1 == "") {
      return 0;
    }
    s0 = s0.toLowerCase();
    s1 = s1.toLowerCase();
    let set = new Set();
    let split = s0.split(" ");
    for (let i in split) {
      set.add(split[i]);
    }
    let res = 0;
    split = s1.split(" ");
    for (let i in split) {
      if (set.has(split[i])) {
        res++;
        set.delete(split[i]);
      }
    }
    return res;
  }
}
//https://binarysearch.com/problems/Common-Words
