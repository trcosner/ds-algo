class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */

  /**
   * Constraints
   * nums.length at least 1
   * num valuest between +- 1000
   * k at least 1
   */
  topKFrequent(nums, k) {
    // keep track of the count for each num
    // map of counts
    const map = new Map();
    for (let num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }

    //create buckets so each bucket[i] is values where count is i
    const buckets = Array(nums.length + 1)
      .fill(0) // [0,0,0,0]
      .map(() => []); // [[],[],[],[]]

    for (let [val, count] of map) {
      buckets[count].push(val);
    }

    const answer = [];

    for (let c = buckets.length - 1; c >= 0 && answer.length < k; c--) {
      for (const v of buckets[c]) {
        answer.push(v);
        if (answer.length === k) break;
      }
    }
    return answer;
  }
}

// O(n) time complexity O(n) space complexity
