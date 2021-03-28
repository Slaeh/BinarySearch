class Solution {
    solve(n) {
        let parsed;
        while(n >= 10){
            parsed = n.toString();
            n = 0;
            for(let i = 0; i < parsed.length; i++){
                n += parseInt(parsed.charAt(i));
            }
        }
        return n;
    }
}
//https://binarysearch.com/problems/Repeated-Addition