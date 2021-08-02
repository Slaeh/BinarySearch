class HashTable {
  constructor() {
    this.map = new Map();
  }

  put(key, val) {
    this.map.set(key, val);
  }

  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    return this.map.get(key);
  }

  remove(key) {
    if (this.map.has(key)) {
      this.map.delete(key);
    }
  }
}
//https://binarysearch.com/problems/Hash-Table
