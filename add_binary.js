/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  a = a.padStart(b.length, '0')
  b = b.padStart(a.length, '0')

  const result = Array(a.length).fill('0')

  for (let i = a.length - 1; i >= 0; i--) {
    const l = a[i],
      r = b[i]
    const carryingBit = result[i]
  }

  return result.join('')
}

console.log(addBinary('11', '1'))
