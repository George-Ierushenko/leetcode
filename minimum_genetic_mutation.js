/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */

var minMutation = function (start, end, bank) {
  const distinctions = findDistinctions(start, end)

  return distinctions.length
}

var findDistinctions = function (start, end) {
  const res = []

  for (let i = 0; i < 8; i++) {
    if (start[i] !== end[i]) {
      res.push(i)
    }
  }

  return res
}

console.log(minMutation('AACCGGTT', 'AACCGGTA'))
