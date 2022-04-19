/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
  const shash = hashStr(s)
  const thash = hashStr(t)

  const hasSubstring = Object
                        .keys(thash)
                        .reduce((acum, v) => acum && shash[v], true)
  if (!hasSubstring) return ''

  const isValidAfterDecrease = (key) => {
      if (!thash[key]) return true

      return thash[key] <= shash[key] - 1
  }

  let l = 0, r = s.length - 1
  while (l < r) {
    const leftV = s[l]
    const rightV = s[r]

    const isValidLeft = isValidAfterDecrease(leftV)
    const isValidRight = isValidAfterDecrease(rightV)

    if (!isValidRight && !isValidLeft) break

    if (isValidLeft) l++, shash[leftV] -= 1
    if (isValidRight) r--, shash[rightV] -= 1
  }

  return s.substring(l, r + 1)
}

const hashStr = (str) => {
  const table = {}

  for (let i = 0; i < str.length; i++) {
    table[str[i]] = (table[str[i]] ?? 0) + 1
  }

  return table
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
