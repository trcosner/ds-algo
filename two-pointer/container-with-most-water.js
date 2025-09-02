class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    // area of each container defined by
    // difference between indecies j - i (width)
    // the min value between the 2 bars (height)
    let n = heights.length;
    let start = 0;
    let end = n - 1;

    let max;
    while (start < end) {
      let width = end - start;
      let height =
        heights[end] <= heights[start] ? heights[end] : heights[start];
      let area = width * height;

      if (!max || area > max) {
        max = area;
      }
      // increment start or decrement end?
      if (heights[start] <= heights[end]) {
        start += 1;
      } else {
        end -= 1;
      }
    }

    return max;
  }
}
