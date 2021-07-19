class Solution:
    def solve(self, s):
        mySet = set()
        for i in s:
            if i in mySet:
                return False
            else: 
                mySet.add(i)
        
        return True
# https://binarysearch.com/problems/A-Unique-String