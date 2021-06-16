class Solution {
    solve(n) {
        let parsed = n.toString();
        let sum = 0;
        for(let i = 0; i < parsed.length; i++){
            sum += parseInt(Math.pow(parsed[i], parsed.length));
        }
        return sum === n;  
    }
}
//https://binarysearch.com/problems/Narcissistic-Number