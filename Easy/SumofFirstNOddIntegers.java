import java.util.*;

class Solution {
    public int solve(int n) {
        int sum = 0, index = 1, count =0;
        while(count != n){
            if(index % 2 == 1){
                sum += index;
                count++;
            }
            index++;
        }
        return sum;
    }
}
//https://binarysearch.com/problems/Sum-of-First-N-Odd-Integers