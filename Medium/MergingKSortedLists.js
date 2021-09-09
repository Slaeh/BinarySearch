class Solution {
  solve(lists) {
    lists = lists.flat();
    lists.sort((a, b) => a - b);
    return lists;
  }
}
//https://binarysearch.com/problems/Merging-K-Sorted-Lists
