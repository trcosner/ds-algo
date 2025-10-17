class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    // for each row, is row[i] unique
    // for each column is col[j] unique
    // for each box is (row / 3) * 3 + (col / 3) unique

    // brute force approach would be for each cell scan the entire row, column, and box for duplicates

    // we could define a board using Maps and iterate through the board placing each item in the Map
    // if double entry encountered, return false

    // board is 9x9, cells are '1'..'9' or '.'
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const ch = board[r][c];
        if (ch === ".") continue; // skip empties

        const box = Math.floor(r / 3) * 3 + Math.floor(c / 3); // 0..8

        if (rows[r].has(ch) || cols[c].has(ch) || boxes[box].has(ch)) {
          return false; // duplicate found
        }
        rows[r].add(ch);
        cols[c].add(ch);
        boxes[box].add(ch);
      }
    }

    return true;
  }
}
