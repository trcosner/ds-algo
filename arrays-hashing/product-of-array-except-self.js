class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    // brute force would be to just calculate this manually for each nums[i] O(n^2) double loop
    // single output array of length n
    // first pass over output fills output array with product of values to the left of i
    // second pass over output fills output array with product of values to the right of i
    const n = nums.length;
    const output = new Array(n).fill(1);

    let left = 1; // left side pass
    for (let i = 0; i < n; i++) {
      output[i] = left; // set value before including current index
      left *= nums[i]; // now set nums[i] for NEXT iteration so we exclude current from product
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      output[i] *= right;
      right *= nums[i];
    }
    return output;
  }
}
