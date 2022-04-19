/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function (matrix) {
  const h = matrix.length
  const w = matrix[0]?.length ?? 0

  const matrixSize = h * w

  const linearMatrix = []

  let deep = 0
  while (linearMatrix.length != matrixSize) {
    linearMatrix.push(...outsideLinerTransform(matrix, deep++, h, w))
  }

  return linearMatrix
}

var outsideLinerTransform = (matrix, deep, h, w) => {
  const realH = h - deep * 2,
    realW = w - deep * 2
  const outsideLiner = []

  for (let i = deep; i < w - deep - 1; i++) {
    outsideLiner.push(matrix[deep][i])
  }

  for (let i = deep; i < h - deep; i++) {
    outsideLiner.push(matrix[i][w - deep - 1])
  }

  for (let i = w - deep - 2; i > deep && realH > 1; i--) {
    outsideLiner.push(matrix[h - deep - 1][i])
  }

  for (let i = h - deep - 1; i > deep && realW > 1; i--) {
    outsideLiner.push(matrix[i][deep])
  }

  return outsideLiner
}

console.log(
  spiralOrder(
    [
      [2, 3, 4],
      [5, 6, 7],
      [8, 9, 10],
      [11, 12, 13],
    ],
    0,
    4,
    3
  )
)
