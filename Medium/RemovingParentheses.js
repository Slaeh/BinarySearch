class Solution {
    solve(s) {
       let arr = [];
       let count = 0;
       for(let i = 0; i < s.length ;i++){
           if(s.charAt(i) === '('){
               arr.push('(');
           }
           else{
               if(s.charAt(i) === ')'){
                   if(arr.pop() != '('){
                       count++;
                   }
               }
           }
        }
        return count + arr.length; 
    }
}
//https://binarysearch.com/problems/Removing-Parentheses