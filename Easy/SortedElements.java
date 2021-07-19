import java.util.*;

class Solution {
    public int solve(int[] nums) {
        int count = 0;
        int [] copy = new int[nums.length];
        for(int i = 0; i < nums.length; i++){
            copy[i] = nums [i];
        }
        Arrays.sort(nums);
        for(int i = 0; i < nums.length; i++){
            if(nums[i] == copy[i]){
                count++;
            }
        }
        return count;
    }
}
//https://binarysearch.com/problems/Sorted-Elements