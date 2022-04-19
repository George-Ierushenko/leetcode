/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
  const solutions = []

  const backtrack = (board = []) => {
    if (n == board.length) return solutions.push(paintBoard(board, n))

    for (let i = 0; i < n; i++) {
      if (isUnderAttack(board, i)) continue

      backtrack([...board, i])
    }
  }

  backtrack()

  return solutions
}

const paintBoard = (board, n) => {
  const paintedBoard = []

  for (const pos of board) {
    const line = Array(n)
      .fill(0)
      .map((_, i) => (i == pos ? 'Q' : '.'))
      .join('')

    paintedBoard.push(line)
  }

  return paintedBoard
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

console.log(solveNQueens(4))
