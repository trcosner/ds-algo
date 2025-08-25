class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const sMap = new Map();
    const tMap = new Map();

    for (const ch of s) {
      sMap.set(ch, (sMap.get(ch) || 0) + 1);
    }
    for (const ch of t) {
      tMap.set(ch, (tMap.get(ch) || 0) + 1);
    }

    return (
      JSON.stringify([...sMap.entries()].sort()) ===
      JSON.stringify([...tMap.entries()].sort())
    );
  }
}
// O(n) time complexity O(n) space complexity
