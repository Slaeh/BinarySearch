import java.util.*;

class Solution {
    public int solve(int[] nums) {
        int low = nums[0];
        int high = nums[0];
        for(int i = 0; i < nums.length; i++){
            if(nums[i] < low){
                low = nums[i];
            }
            if(nums[i] > high){
                high = nums[i];
            }
        }
        return high - low;
    }
}
//https://binarysearch.com/problems/Making-List-Values-Equal