class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */

  // O(n) time O(1) space
  isPalindrome(s) {
    const specialChars = new Set([" ", ",", ".", "!", "?", "'", ":"]);
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
      while (specialChars.has(s[i]) && i < j) {
        i++;
      }
      while (specialChars.has(s[j]) && i < j) {
        j--;
      }

      let left = s[i].toLowerCase();
      let right = s[j].toLowerCase();
      if (left !== right) {
        console.log({ i, left, j, right });
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
}
