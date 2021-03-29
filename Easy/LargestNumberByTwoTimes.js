class Solution {
    solve(nums) {
        nums.sort((a,b) =>{
            return a-b;
        });
        if(nums[nums.length -1] > nums[nums.length-2] * 2){
            return true;
        }
        return false;
    }
}
//https://binarysearch.com/problems/Largest-Number-By-Two-Times