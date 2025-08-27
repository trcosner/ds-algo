class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    //for each string in strs, sort the chars and see if the sorted string is in the map, if not add it
    const map = new Map();

    strs.forEach((word) => {
      const key = word.split("").sort().join("");
      if (map.has(key)) {
        let group = map.get(key);
        group.push(word);
      } else {
        map.set(key, [word]);
      }
    });
    return [...map.values()];
  }
}
