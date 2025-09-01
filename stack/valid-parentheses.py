from collections import deque

class Solution:
    def isValid(self, s: str) -> bool:
        forwardChars = {
            "{":"}",
            "(": ")",
            "[":"]",
        }

        stack = deque()
        print("hello")
        for i in range(len(s)):
            ch = s[i]
            if i == 0 and ch not in forwardChars:
                print('early back')
                return False
            elif i == len(s) - 1 and ch in forwardChars:
                print('early forward')
                return False
            elif ch in forwardChars:
                stack.appendleft(forwardChars[ch])
                print("hit")
            elif len(stack) > 0 and ch == stack[0]:
                stack.popleft()
                print("back hit")
            else:
                return False
            
            print({i,ch})
            print(stack)
            if i == len(s) - 1 and len(stack) > 0:
                print('not empty stack')
                return False
        
        return True
        