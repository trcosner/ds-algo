class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numsDict: dict = {}

        for i, num in enumerate(nums): 
            match = target - num
            if match in numsDict:
                return [numsDict[match], i]
            else: 
                numsDict[num] = i

                