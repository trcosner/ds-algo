class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anaDict = {}

        for word in strs:
            key = "".join(sorted(word))
            
            if key in anaDict:
                group = anaDict[key]
                group.append(word)
            else:
                anaDict[key] = [word]

        return list(anaDict.values())
    
    