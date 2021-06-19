# class LLNode:
#     def __init__(self, val, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def solve(self, node, target):
        if node.val == target and node.next == None:
            return None
        dummy = LLNode('dummy')
        dummy.next = node
        dumPointer = dummy
        currPointer = node
        while(currPointer): 
            if currPointer.val == target: 
                dumPointer.next = currPointer.next
                currPointer = currPointer.next
            else: 
                dumPointer = currPointer
                currPointer = currPointer.next
        return dummy.next
#https://binarysearch.com/problems/Linked-List-Deletion