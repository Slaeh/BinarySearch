class Solution {
    solve(nums, k) {
        nums.sort((a,b) =>{
            return a-b;
        });

        return nums[k];
    }
}
//https://binarysearch.com/problems/Kth-Smallest-Element