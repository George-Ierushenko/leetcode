/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (targetExist(board, word, [x, y])) return true
    }
  }

  return false
};

var targetExist = (board, word, [x, y], lvl = 0) => {
  if (lvl === word.length) return true

  if (board?.[y]?.[x] === word[lvl]) {
    board[y][x] = ''

    const ans = (
      targetExist(board, word, [x + 1, y], lvl + 1) ||
      targetExist(board, word, [x - 1, y], lvl + 1) ||
      targetExist(board, word, [x, y + 1], lvl + 1) ||
      targetExist(board, word, [x, y - 1], lvl + 1)
    )

    board[y][x] = word[lvl]
    return ans
  }

  return false
}

console.log(exist(
  [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
  ], 'SEE'))