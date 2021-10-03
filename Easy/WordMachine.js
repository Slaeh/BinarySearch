class Solution {
  solve(ops) {
    let arr = [];
    let first;
    let second;
    for (let i in ops) {
      let elem = ops[i];
      switch (elem) {
        case "POP":
          if (arr.length == 0) {
            return -1;
          } else {
            arr.pop();
          }
          break;
        case "DUP":
          if (arr.length == 0) {
            return -1;
          } else {
            let dup = arr.pop();
            let copy = dup;
            arr.push(dup);
            arr.push(copy);
          }
          break;
        case "+":
          if (arr[arr.length - 1] != null) {
            first = arr.pop();
          } else {
            return -1;
          }
          if (arr[arr.length - 1] != null) {
            second = arr.pop();
          } else {
            return -1;
          }
          arr.push(first + second);
          break;
        case "-":
          if (arr[arr.length - 1] != null) {
            first = arr.pop();
          } else {
            return -1;
          }
          if (arr[arr.length - 1] != null) {
            second = arr.pop();
          } else {
            return -1;
          }
          arr.push(first - second);
          break;
        default:
          arr.push(parseInt(elem));
          break;
      }
    }
    let popped = arr.pop();
    return popped;
  }
}
//https://binarysearch.com/problems/Word-Machine
