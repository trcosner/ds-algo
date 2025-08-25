#O(n) time complexity O(n) space complexity
def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        sDict = {}
        tDict = {}
        
        for char in s:
            if char in sDict:
                sDict[char] += 1
            else:
                sDict[char] = 1

        for char in t:
            if char in tDict:
                tDict[char] += 1
            else:
                tDict[char] = 1
        if sDict == tDict:
            return True
        else:
            return False



# assuming 26 character alphabet we can get to O(n) time O(1) space
def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    counts = [0] * 26  # constant size → O(1) space
    base = ord('a')
    for i in range(len(s)):
        counts[ord(s[i]) - base] += 1
        counts[ord(t[i]) - base] -= 1
    return all(c == 0 for c in counts)

