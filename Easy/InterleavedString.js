class Solution {
    solve(s0, s1) {
        let res = "";
        for(let i = 0; i < s0.length + s1.length; i++){
            if(s0.charAt(i)){
                res += s0.charAt(i);
            }
            if(s1.charAt(i)){
                res += s1.charAt(i);
            }
        }
        return res;
    }
}
//https://binarysearch.com/problems/Interleaved-String