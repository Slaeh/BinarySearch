class Solution {
    solve(s0, s1) {
        if(s0.length != s1.length){
            return false;
        }
        let map = new Map();
        for(let i = 0; i < s0.length; i++){
            if(map.has(s0.charAt(i))){
                map.set(s0.charAt(i), map.get(s0.charAt(i)) + 1);
            }
            else{
                map.set(s0.charAt(i), 1);
            }
        }
        for(let i =0; i < s1.length; i++){
            if(map.has(s1.charAt(i)) && map.get(s1.charAt(i)) != 0){
                map.set(s1.charAt(i), map.get(s1.charAt(i)) -1);
            }
            else{
                return false;
            }
        }
        if(map.length > 0){
            return false;
        }
        return true; 
    }
}
//https://binarysearch.com/problems/Anagram-Checks
