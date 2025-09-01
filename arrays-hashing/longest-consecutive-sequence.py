class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        numSet = set(nums) # remove duplicates

        longest = 0
        for num in numSet:
            if not num - 1 in numSet: # is starting val?
                length = 1
                curr = num

                while curr + 1 in numSet:
                    length += 1
                    curr += 1

                if length > longest: longest = length
        return longest
        