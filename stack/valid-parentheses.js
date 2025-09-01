class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    // "[()[({}{})]]{}" valid
    // "[(])]" invalid

    // brute force for each s[i] walk through array and see if s[i] has closing

    // walk forward building inverse string of forward characters
    // if you reach a backward character,
    // does the inverse string match the expected slice of the string?
    const forwardChars = new Map([
      ["{", "}"],
      ["[", "]"],
      ["(", ")"],
    ]);

    let reverse = [];
    for (let i = 0; i < s.length; i++) {
      let ch = s[i];

      if (
        (i === 0 && !forwardChars.has(ch)) ||
        (i === s.length - 1 && forwardChars.has(ch))
      ) {
        //if starts with close or ends with open char invalid
        console.log("early", { i, ch, reverse });
        return false;
      } else if (forwardChars.has(ch)) {
        reverse.unshift(forwardChars.get(ch));
        console.log("forward", { i, ch, reverse });
      } // is open bracket with potential to have valid closing
      else if (ch === reverse[0]) {
        reverse.shift();
        console.log("match", { i, ch, reverse });
      } // is closing | must match reverse[0]
      else {
        console.log("other", { i, ch, reverse });
        return false;
      } // some other invalid case i am not considering

      if (i === s.length - 1 && reverse.length > 0) {
        console.log("bad", { i, ch, reverse });
        return false;
      } // if we get to the end and there are still items to be removed from stack, invalid
    }

    return true;
  }
}
