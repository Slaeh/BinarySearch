class CustomSet {
  constructor() {
    this.obj = {};
  }

  add(val) {
    this.obj[val] = val;
  }

  exists(val) {
    if (this.obj[val]) {
      return true;
    }
    return false;
  }

  remove(val) {
    this.obj[val] = null;
  }
}
//https://binarysearch.com/problems/Set
