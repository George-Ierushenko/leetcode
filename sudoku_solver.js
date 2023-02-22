/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solveSudoku = function(board) {
  let rows = Array(9).fill(0), cols = Array(9).fill(0), sqrs = Array(9).fill(0);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;
      let bit = Number(board[i][j]) - 1;
      rows[i] |= 1 << bit;
      cols[j] |= 1 << bit;
      sqrs[((i / 3) | 0) * 3 + ((j / 3) | 0)] |= 1 << bit;
    }
  }

  return

  function dfs(pos, board) {
    if (pos >= 81) {
      return true;
    }
    let y = (pos / 9) | 0, x = pos % 9;
    if (board[y][x] !== ".") {
      return dfs(pos + 1, board);
    }
    let sq = ((y / 3) | 0) * 3 + ((x / 3) | 0);
    let bits = ~(rows[y] | cols[x] | sqrs[sq]) & ((1 << 9) - 1);  // get all possible numbers to fill
    while (bits) {
	  let bit = bits & -bits;                                     // get a number to fill
      board[y][x] = String(Math.log2(bit) + 1);
      rows[y] |= bit; cols[x] |= bit; sqrs[sq] |= bit;
      if (dfs(pos + 1, board)) return true;
      rows[y] &= ~bit; cols[x] &= ~bit; sqrs[sq] &= ~bit;
      board[y][x] = ".";
	  bits &= bits - 1;                                           // remove the used number
    }
  }
  dfs(0, board)
};



console.log(
  solveSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ])
)