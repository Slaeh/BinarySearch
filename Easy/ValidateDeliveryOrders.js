class Solution {
  solve(orders) {
    if (orders.length <= 1) {
      return false;
    }
    let set = new Set();
    let pickup = 0;
    for (let i in orders) {
      console.log(orders[i]);
      if (!set.has(orders[i]) && orders[i][0] == "P") {
        set.add(orders[i]);
        pickup++;
      } else if (!set.has(orders[i]) && orders[i][0] == "D") {
        let arr = orders[i].split("");
        arr.shift();
        arr.unshift("P");
        arr = arr.join("");
        if (!set.has(arr)) {
          return false;
        }
        set.add(orders[i]);
        pickup--;
      } else {
        return false;
      }
    }
    return pickup === 0;
  }
}
//https://binarysearch.com/problems/Validate-Delivery-Orders
