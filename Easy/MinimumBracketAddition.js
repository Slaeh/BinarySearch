class Solution {
    solve(s) {
       let stack = s.split("");
       let res = [];
       let counter = 0;
       for(let i = 0; i < s.length; i++){
            if(stack[i] === '('){
                res.push(s.charAt(i));
            }   
            if(stack[i] === ')'){
                if(res.length == 0 || res.pop() != '('){
                    counter++;
                }
            }
       }
       while(res.length != 0){
           res.pop();
           counter++;
       }
       return counter; 
    }
}
//https://binarysearch.com/problems/Minimum-Bracket-Addition