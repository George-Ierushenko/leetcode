/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function (
  x,
  y,
  binaryX = x.toString(2),
  binaryY = y.toString(2)
) {
  binaryX = binaryX.padStart(binaryY.length, '0')
  binaryY = binaryY.padStart(binaryX.length, '0')

  return Array(binaryX.length)
    .fill(0)
    .reduce((acum, v, i) => (binaryX[i] != binaryY[i] ? acum + 1 : acum), 0)
}

console.log(hammingDistance(3, 1))
