class MinimumStack {
  constructor() {
    this.stack = [];
  }

  append(val) {
    this.stack.push(val);
  }

  peek() {
    let val = this.stack[this.stack.length - 1];
    return val;
  }

  min() {
    let small = Math.min(...this.stack);
    return small;
  }

  pop() {
    let popped = this.stack.pop();
    return popped;
  }
}
//https://binarysearch.com/problems/Minimum-Stack
