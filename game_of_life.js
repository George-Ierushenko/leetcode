/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  nextStage(board)
}

var nextStage = (board) => {
  const map = createNeighborMap(board)

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      const count = map[y][x]

      if (count < 2 || count > 3) {
        board[y][x] = 0

        continue
      }

      if (count === 3) {
        board[y][x] = 1
      }
    }
  }
}

var createNeighborMap = (board) => {
  return board.map((line, y) =>
    line.map((c, x) => getNeighborsCount(board, x, y))
  )
}

const directions = [
  [0, -1],
  [1, -1],
  [-1, -1],

  [-1, 0],
  [1, 0],

  [0, 1],
  [1, 1],
  [-1, 1],
]

var getNeighborsCount = (board, x, y) => {
  const ensure = (v) => v ?? 0

  return directions.reduce(
    (count, [dx, dy]) => count + ensure(board[y + dy]?.[x + dx]),
    0
  )
}

const input = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
]
gameOfLife(input)
console.log(input)
;[
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0, 1, 0],
]
