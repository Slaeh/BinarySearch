class Solution {
    solve(nums) {
        let map = new Map();
        for(let i =0; i < nums.length; i++){
            if(map.has(nums[i])){
                map.set(nums[i], map.get(nums[i]) + 1);
            }
            else{
                map.set(nums[i], 1);
            }
        }
        let set = new Set();
        for(let table of map.values()){
            if(set.has(table)){
                return false;
            }
            else{
                set.add(table);
            }
        }
        return true; 
    }
}
//https://binarysearch.com/problems/Unique-Occurrences