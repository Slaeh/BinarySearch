class Solution {
    solve(nums) {
        let arr = [];
        arr.push(nums[0]);
        nums[0] = 0;
        for(let i = 1; i < nums.length; i++){
            let copy = nums[i];
            nums[i] = arr[0];
            if(copy < arr[0]){
                arr[0] = copy;
            }
        }
        return nums;
    }
}
//https://binarysearch.com/problems/List-Min-Replacement