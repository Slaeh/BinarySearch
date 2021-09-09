/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
class BSTIterator {
  constructor(root) {
    this.arr = [];
    this.pointer = 0;
    this.dfs(root, this.arr);
  }

  next() {
    return this.arr[this.pointer++];
  }

  hasnext() {
    return this.pointer < this.arr.length;
  }

  dfs(root, arr) {
    if (root == null) {
      return;
    }
    this.dfs(root.left, arr);
    arr.push(root.val);
    this.dfs(root.right, arr);
  }
}
//https://binarysearch.com/problems/Binary-Search-Tree-Iterator
