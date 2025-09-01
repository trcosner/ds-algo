class Solution:
    def isPalindrome(self, s: str) -> bool:
        specialChars = set([" ", ",", ".", "!", "?", "'", ":"])

        i = 0
        j = len(s) - 1

        while(i < j):
            while(s[i] in specialChars and i < j):
                i += 1
            while(s[j] in specialChars and i < j):
                j -= 1
            
            left = s[i].lower()
            right = s[j].lower()

            if(left != right):
                return False
            i += 1
            j -= 1
        
        return True
