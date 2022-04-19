/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = (s, p) => {
  return cachedMatch(s, p)
}

const cachedMatch = (s, p) => {
  const cache = {}

  const isRecursionMatch = (s, p, i = 0, j = 0) => {
    const getCachedValue = () => cache[buildCacheNodeName(i, j)]

    if (p.length <= j) return i >= s.length
    if (getCachedValue() !== undefined) return getCachedValue()

    const isPriorityPatter = p[j + 1] == '*'
    const firstMatch = isCharMatch(s[i], p[j])

    if (isPriorityPatter) {
      cache[buildCacheNodeName(i, j)] =
        isRecursionMatch(s, p, i, j + 2) ||
        (firstMatch && isRecursionMatch(s, p, i + 1, j))

      return getCachedValue()
    }

    return (cache[buildCacheNodeName(i, j)] =
      firstMatch && isRecursionMatch(s, p, i + 1, j + 1))
  }

  return isRecursionMatch(s, p)
}

const buildCacheNodeName = (i, j) => `${i}${j}`
const isCharMatch = (c, p) => c !== undefined && (c == p || p == '.')

console.log(isMatch('cbbbaccbcacbcca', 'b*.*b*a*.a*b*.a*'))
