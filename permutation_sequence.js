/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let possibilities = fac(n)
  let leftSequence = Array(n).fill(0).map((_, i) => i + 1)
  let result = ''

  const appendNextNumber = () => {
    const interval = (possibilities /= n)

    let numberIndex = (k / interval) | 0
    if (!(k % interval)) numberIndex -= 1
    result += leftSequence[numberIndex]

    leftSequence.splice(numberIndex, 1)
    k = k - numberIndex * interval
    n -= 1
  }

  while (n > 0) {
    appendNextNumber()
  }

  return result
};

const fac = (n) => {
  if (n < 2) return 1

  return n * fac(n - 1)
}


console.log(getPermutation(9, 100))