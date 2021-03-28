class Solution {
    solve(s) {
        let set = new Set();
        for(let i = 0; i < s.length; i++){
            if(set.has(s.charAt(i))){
                return i;
            }
            else{
                set.add(s.charAt(i));
            }
        }
        return -1;
    }
}
//https://binarysearch.com/problems/Recurring-Character