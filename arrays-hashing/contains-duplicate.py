def hasDuplicate(self, nums: List[int]) -> bool:
        numsDict = {}

        for num in nums:
            if num in numsDict:
                return True
            numsDict[num] = True

        return False