class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    // strs can have length up to 100
    // each str can be up to 199 chars, can be empty
    // Input: ["neet","code","love","you"]
    // returns single string like "neetcodeloveyou"
    // strings can contain all of our valid delimeters, so cant use that as is
    // delimeter n(str.length)#
    let encoded = "";
    for (const str of strs) {
      const length = str.length;
      encoded += `${length}#${str}`;
    }
    return encoded;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    // receives single string like "4#neet4#code4#love3#you"
    // Output: ["neet","code","love","you"]

    const output = [];
    // array starts with a number up to 3 digits long
    // ends in #

    // while we are not at the end of the string
    // point to next # and read number of chars
    // copy the next n chars to a string and push to output
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      const count = parseInt(str.slice(i, j), 10);
      const start = j + 1;
      const end = start + count;
      const word = str.slice(start, end);
      output.push(word);

      i = end;
    }
    return output;
  }
}
