class Solution:
    def maxArea(self, heights: List[int]) -> int:
        n = len(heights)
        start = 0
        end = n - 1

        maxVal = None
        while start < end:
            height = heights[start] if heights[start] <= heights[end] else heights[end]
            width = end - start
            area = height * width

            if maxVal == None or area > maxVal:
                maxVal = area

            if heights[start] < heights[end]:
                start += 1
            else:
                end -= 1
        return maxVal