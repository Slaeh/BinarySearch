class CircularQueue {
  constructor(capacity) {
    this.arr = [];
    this.size = capacity;
    this.count = this.arr.length;
  }

  enqueue(val) {
    if (this.count < this.size) {
      this.arr.push(val);
      this.count++;
      return true;
    }
    return false;
  }

  dequeue() {
    if (this.count == 0) {
      return false;
    }
    this.arr.shift();
    this.count--;
    return true;
  }

  front() {
    if (this.count == 0) {
      return -1;
    }
    return this.arr[0];
  }

  top() {
    if (this.count == 0) {
      return -1;
    }
    return this.arr[this.count - 1];
  }

  isFull() {
    return this.count == this.size;
  }

  isEmpty() {
    return this.count == 0;
  }
}
//https://binarysearch.com/problems/Circular-Queue
