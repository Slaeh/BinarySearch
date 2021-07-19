import java.util.*;

class Solution {
    public int solve(int[] prices, int k) {
        if(prices.length == 0){
            return 0;
        }
        Arrays.sort(prices);
        int sum = 0, count =0;
        for(int i = 0; i < prices.length; i++){
            if(prices[i] + count <= k){
                sum ++;
                count += prices[i];
            }
        }
        return sum;
    }
}
//https://binarysearch.com/problems/Buying-Cars