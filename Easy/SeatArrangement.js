class Solution {
    solve(n, seats) {
        if(n === 0){
            return true;
        }
        if(seats.length === 1 && seats[0] === 1){
            return false;
        }
        if(seats.length === 1 && seats[0] === 0){
            return true;
        }

        for(let i = 0; i < seats.length; i++){
            if(seats[i] == 0 && seats[i-1] != 1 && seats[i+1] != 1){
                if(n === 0){
                    break;
                }
                seats[i] = 1;
                n--;
            }
        }
        if(n > 0){
            return false;
        }
        return true;
    }
}
//https://binarysearch.com/problems/Seat-Arrangement