class Solution {
    solve(nums) {
        let counter = 0;
        for(let i = 0 ; i < nums.length; i++){
            if(nums[i].toString().length % 2 === 1){
                counter++;
            }
        }
        return counter;
    }
}
//https://binarysearch.com/problems/Odd-Number-of-Digits