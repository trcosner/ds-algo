class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    // assuming ONE pair per array
    // assuming array HAS a valid two sum

    // map of value:index
    // for each element in array:
    // if total - element in map, return [mapped index, current index]
    const map = new Map();

    for (const [i, num] of nums.entries()) {
      const match = target - num;

      if (map.has(match) && map.get(match) >= 0) {
        return [map.get(match), i];
      }

      map.set(num, i);
    }
  }
}

// O(n) time complexity O(n) space complexity
