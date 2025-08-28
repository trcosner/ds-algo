
from typing import List


def isValidSudoku(board: List[List[str]]) -> bool:
    rows = [set() for _ in range(9)]
    columns = [set() for _ in range(9)]
    boxes = [set() for _ in range(9)]

    for r in range(9):
        for c in range(9):
            b = (r//3) * 3 + (c//3)
            ch = board[r][c]
            if ch == ".": 
                continue

            if ch in rows[r] or ch in columns[c] or ch in boxes[b]:
                return False
            else:
                rows[r].add(ch)
                columns[c].add(ch)
                boxes[b].add(ch)
    
    return True

board = [["1","2",".",".","3",".",".",".","."],["4",".",".","5",".",".",".",".","."],[".","9","8",".",".",".",".",".","3"],["5",".",".",".","6",".",".",".","4"],[".",".",".","8",".","3",".",".","5"],["7",".",".",".","2",".",".",".","6"],[".",".",".",".",".",".","2",".","."],[".",".",".","4","1","9",".",".","8"],[".",".",".",".","8",".",".","7","9"]]
invalid_board = [["1","2",".",".","3",".",".","1","."],["4",".",".","5",".",".",".",".","."],[".","9","8",".",".",".",".",".","3"],["5",".",".",".","6",".",".",".","4"],[".",".",".","8",".","3",".",".","5"],["7",".",".",".","2",".",".",".","6"],[".",".",".",".",".",".","2",".","."],[".",".",".","4","1","9",".",".","8"],[".",".",".",".","8",".",".","7","9"]]

print(f"Valid board: {isValidSudoku(board)}")
print(f"Invalid board: {isValidSudoku(invalid_board)}")