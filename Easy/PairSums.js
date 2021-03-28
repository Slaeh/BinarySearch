class Solution {
    solve(nums) {
        let count = 0;
        let odds = 0;
        let evens = 0;
        
        for(let i = 0; i < nums.length; i++){
            if(nums[i] % 2 == 1){
                odds++;
            }
            else{
                evens++;
            }
        }
        while(evens != 0){
            count += odds;
            evens--;
        }
        return count;
    }
}
//https://binarysearch.com/problems/Pair-Sums