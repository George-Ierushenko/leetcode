/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  let prefix = getPrefix(strs[0], strs[1])

  for (let i = 2; i < strs.length && prefix !== ''; i++) {
    prefix = getPrefix(prefix, strs[i])
  }

  return prefix
}

var getPrefix = (first, second = '') => {
  let prefix = ''

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) return prefix

    prefix += first[i]
  }

  return prefix
}

// console.log(getInitialPrefix(['flower', 'flow', 'flight']))

console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
