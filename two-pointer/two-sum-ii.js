class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  // 1-indexed array so first element is actually reffered to as nums[1]
  // nums sorted in increasing order
  // guaranteed exactly one solution
  // brute force solution O(n^2) for each nums[i] compare to every nums[j]
  twoSum(numbers, target) {
    // O(n) time O(1) space
    // can I reduce the scope of my search by making educated reasoning about target and nums
    // min max nums and whether max is greater than or equal to target sounds like it could be useful data
    let start = 0;
    let end = numbers.length - 1;

    while (start !== end) {
      console.log("hello", { start, end, sum: numbers[start] + numbers[end] });
      if (numbers[start] + numbers[end] === target) {
        console.log("match", { start, end });
        return [start + 1, end + 1];
      }
      if (numbers[start] + numbers[end] > target) {
        console.log("over", { start, end });
        end -= 1;
      } // too big, decrement end
      if (numbers[start] + numbers[end] < target) {
        console.log("under", { start, end });
        start += 1;
      } // too small, increment start
    }
  }
}
