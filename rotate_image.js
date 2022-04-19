/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function (matrix) {
  for (let y = 0; y < matrix.length - 1; y++) {
    for (let x = y; x < matrix.length - y - 1; x++) {
      rotateFour(matrix, x, y)
    }
  }
}

var rotateFour = (matrix, x, y, rotations = 1) => {
  if (rotations === 5) return

  const value = matrix[y][x]
  const nX = matrix.length - y - 1,
    nY = x

  rotateFour(matrix, nX, nY, rotations + 1)

  matrix[nY][nX] = value
}

// const matrix = [
//   [1, 2, 3, 5],
//   [4, 5, 6, 7],
//   [7, 8, 9, 10],
//   [1, 2, 3, 5],
// ]
const matrix = [
  [1, 2],
  [4, 5],
]

// const matrix = [
//   ['q', 'w', 'e', 'r', 't', 'b'],

//   ['y', 'u', 'i', 'o', 'p', 'n'],

//   ['a', 's', 'd', 'f', 'g', 'g'],

//   ['h', 'j', 'k', 'l', 'z', 'q'],

//   ['x', 'c', 'v', 'b', 'n', 't'],

//   ['q', 'w', 'e', 'r', 't', 'b'],
// ]

rotate(matrix)

console.log(matrix)

// rotateFour(matrix, 0, 0)

// console.log(matrix)

// [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
