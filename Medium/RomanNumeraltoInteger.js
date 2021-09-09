class Solution {
  solve(numeral) {
    let sum = 0;
    for (let i = 0; i < numeral.length; i++) {
      if (numeral[i] == "I") {
        if (numeral[i + 1] == "V") {
          sum += 4;
          i++;
        } else if (numeral[i + 1] == "X") {
          sum += 9;
          i++;
        } else {
          sum += 1;
        }
      } else if (numeral[i] == "X") {
        if (numeral[i + 1] == "L") {
          sum += 40;
          i++;
        } else if (numeral[i + 1] == "C") {
          sum += 90;
          i++;
        } else {
          sum += 10;
        }
      } else if (numeral[i] == "C") {
        if (numeral[i + 1] == "D") {
          sum += 400;
          i++;
        } else if (numeral[i + 1] == "M") {
          sum += 900;
          i++;
        } else {
          sum += 100;
        }
      } else if (numeral[i] == "V") {
        sum += 5;
      } else if (numeral[i] == "L") {
        sum += 50;
      } else if (numeral[i] == "D") {
        sum += 500;
      } else if (numeral[i] == "M") {
        sum += 1000;
      }
    }
    return sum;
  }
}
//https://binarysearch.com/problems/Roman-Numeral-to-Integer
