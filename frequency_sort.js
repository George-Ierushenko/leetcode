/**
 * @param {string} s
 * @return {string}
 */

var frequencySort = function (s) {
  const array = s.split('')

  const node = array.reduce(
    (node, v) => ((node[v] = (node[v] ?? 0) + 1), node),
    {}
  )

  return array.sort((a, b) => {
    if (node[b] == node[a]) {
      return a > b ? -1 : 1
    }

    return node[b] - node[a]
  })
}

console.log(frequencySort('loveleetcode'))
