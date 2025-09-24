class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        results = [0] * n
        stack = []

        for i in range(n-1, -1, -1):
            temperature = temperatures[i]

            while stack and temperatures[stack[-1]] <= temperature:
                stack.pop()
            
            if stack:
                results[i] = stack[-1] - i 
            
            stack.append(i)
        
        return results
    



#     You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

# Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

