class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    // brute force would be to check for num[i] + 1 for every num keeping track of longest sequence encountered O(n^2)

    // look for starting values, then walk array looking for val+1 until it is not present, then move on to next start

    // if nums empty, answer 0
    if (nums.length === 0) {
      return 0;
    }

    const numSet = new Set(nums); // remove duplicates
    let longest = 0;

    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        // is a starting value
        let length = 1; // init new seq
        let curr = num;

        while (numSet.has(curr + 1)) {
          length += 1;
          curr += 1;
        }

        if (length > longest) {
          longest = length;
        }
      }
    }

    return longest;
  }
}
