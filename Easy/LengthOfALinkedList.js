class Solution {
    solve(node) {
        let res = 0;
        if(node == null){
            return 0;
        }
        if(node.next === null){
            return 1;
        }
        res++;
        while(node != null && node.next != null){
            res++;
            node = node.next;
        }
        return res; 
    }
}
//https://binarysearch.com/problems/Length-of-a-Linked-List