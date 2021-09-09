class ZippedIterator {
  constructor(a, b) {
    this.arr1 = a;
    this.arr2 = b;
    this.first = 0;
    this.second = 0;
    this.flip = true;
  }

  next() {
    if (this.flip == true) {
      this.flip = false;
      if (this.first != this.arr1.length) {
        return this.arr1[this.first++];
      } else {
        return this.arr2[this.second++];
      }
    } else if (this.flip == false) {
      this.flip = true;
      if (this.second != this.arr2.length) {
        return this.arr2[this.second++];
      } else {
        return this.arr1[this.first++];
      }
    }
  }

  hasnext() {
    if (this.flip == true) {
      if (this.arr1[this.first] != null || this.arr2[this.second] != null) {
        return true;
      } else {
        return false;
      }
    }
    if (this.flip == false) {
      if (this.arr2[this.second] != null || this.arr1[this.first] != null) {
        return true;
      } else {
        return false;
      }
    }
  }
}
//https://binarysearch.com/problems/Zipped-Iterator
