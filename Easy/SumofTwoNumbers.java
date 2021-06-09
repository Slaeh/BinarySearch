import java.util.*;

class Solution {
    public boolean solve(int[] nums, int k) {
        Set<Integer> set = new HashSet<>();
        for(int i =0; i < nums.length; i++){
            if(set.contains(k - nums[i])){
                return true;
            }
            else{
                set.add(nums[i]);
            }
        }
        return false;
    }
}
//https://binarysearch.com/problems/Sum-of-Two-Numbers