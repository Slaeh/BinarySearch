class Solution {
  solve(moves, x, y) {
    let top = 0;
    let bot = 0;
    for (let i in moves) {
      if (moves[i] == "NORTH") {
        bot++;
      } else if (moves[i] == "SOUTH") {
        bot--;
      } else if (moves[i] == "WEST") {
        top--;
      } else if (moves[i] == "EAST") {
        top++;
      }
    }
    return top == x && bot == y;
  }
}
//https://binarysearch.com/problems/Roomba
