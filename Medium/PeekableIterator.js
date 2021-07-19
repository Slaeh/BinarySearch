class PeekableIterator {
  constructor(nums) {
    this.arr = nums;
    this.counter = 0;
  }

  peek() {
    if (this.arr[this.counter] == undefined) {
      return null;
    } else {
      return this.arr[this.counter];
    }
  }

  next() {
    let res = this.arr[this.counter];
    this.counter++;
    return res;
  }

  hasnext() {
    if (this.arr[this.counter] || this.arr[this.counter] == 0) return true;
    return false;
  }
}
//https://binarysearch.com/problems/Peekable-Iterator
