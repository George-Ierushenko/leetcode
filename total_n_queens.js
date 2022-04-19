/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let counter = 0

  const backtrack = (board = []) => {
    if (n == board.length) return counter++

    for (let i = 0; i < n; i++) {
      if (isUnderAttack(board, i)) continue

      backtrack([...board, i])
    }
  }

  backtrack()
  return counter
}

var isUnderAttack = (board, pos) => {
  for (let row = 0; row < board.length; row++) {
    if (
      pos == board[row] ||
      row + board[row] == board.length + pos ||
      row - board[row] == board.length - pos
    ) {
      return true
    }
  }

  return false
}

console.log(totalNQueens(9))
