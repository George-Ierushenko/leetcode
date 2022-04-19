/**
 * @param {number} n
 * @return {number[][]}
 */

var generateMatrix = function (n) {
  const matrix = createEmptyMatrix(n)

  let value = 1
  for (let deep = 0; deep < Math.round(n / 2); deep++) {
    value = fillMatrixOneDeep(matrix, deep, value)
  }

  return matrix
}

var createEmptyMatrix = (n) => {
  const matrix = []

  for (let i = 0; i < n; i++) matrix.push([])

  return matrix
}

var fillMatrixOneDeep = (matrix, deep, value) => {
  const s = matrix.length

  for (let i = deep; i < s - deep - 1; i++) {
    matrix[deep][i] = value++
  }

  for (let i = deep; i < s - deep; i++) {
    matrix[i][s - deep - 1] = value++
  }

  for (let i = s - deep - 2; i > deep; i--) {
    matrix[s - deep - 1][i] = value++
  }

  for (let i = s - deep - 1; i > deep; i--) {
    matrix[i][deep] = value++
  }

  return value
}

console.log(generateMatrix(4))
