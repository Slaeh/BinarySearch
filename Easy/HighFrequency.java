import java.util.*;

class Solution {
    public int solve(int[] nums) {
        HashMap<Integer,Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            if(map.containsKey(nums[i])){
                map.put(nums[i], map.get(nums[i])+1);
            }
            else{
                map.put(nums[i], 1);
            }
        }
        int max = 0;
        for(Integer i : map.values()){
            if(i > max){
                max = i;
            }
        }
        return max;
    }
}
//https://binarysearch.com/problems/High-Frequency