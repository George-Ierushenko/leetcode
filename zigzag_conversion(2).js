// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */

var convert = function (s, numRows) {
  if (numRows == 1) return s

  const matrix = Array(numRows).fill('')

  var matrixIndex = 0
  var isGrowing = true

  var incrementMatrix = () => {
    if (isGrowing) return matrixIndex++

    matrixIndex--
  }

  var turnGrowingFlag = () => {
    if (matrixIndex == numRows - 1) isGrowing = false

    if (matrixIndex == 0) isGrowing = true
  }

  for (let i = 0; i < s.length; i++) {
    matrix[matrixIndex] += s[i]

    incrementMatrix()
    turnGrowingFlag()
  }

  return matrix.join('')
}

console.log(convert('ABCDE', 4))
