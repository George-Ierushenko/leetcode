/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const ANY_CHARACTER_SYMBOL = '?'
const ANY_SEQUENCE_SYMBOL = '*'

var isMatch = function (s, p) {
  ;(s = ' ' + s), (p = ' ' + p)
  const store = []

  const saveStoreGet = (i, j) => (store[i] ?? [])[j]

  const reachedPrioritySymbol = (i, j) => {
    return saveStoreGet(i - 1, j) || saveStoreGet(i, j - 1)
  }

  const iterateMatch = (i, j) => {
    const sympol = s[i],
      pattern = p[j]

    if ((i == 0 && j == 0) || saveStoreGet(i - 1, j - 1)) {
      return isMatchStraight(sympol, pattern)
    }

    if (pattern === ANY_SEQUENCE_SYMBOL && reachedPrioritySymbol(i, j)) {
      return true
    }

    return false
  }

  for (let i = 0; i < s.length; i++) {
    store.push([])

    for (let j = 0; j < p.length; j++) {
      store[i][j] = iterateMatch(i, j)
    }
  }

  return store[s.length - 1][p.length - 1]
}

const isMatchStraight = (s, p) => {
  return (
    s === p || (p === ANY_CHARACTER_SYMBOL && s) || p === ANY_SEQUENCE_SYMBOL
  )
}

console.log(isMatch('mississippi', 'm??*ss*?i*pi'))

// const ANY_CHARACTER_SYMBOL = '?'
// const ANY_SEQUENCE_SYMBOL = '*'

// var isMatch = function (s, p) {
//   const store = []

//   const saveStoreGet = (i, j) => (store[i] ?? [])[j]

//   const reachedPrioritySymbol = (i, j) => {
//     return saveStoreGet(i - 1, j) || saveStoreGet(i, j - 1)
//   }

//   const iterateMatch = (i, j) => {
//     const sympol = s[i],
//       pattern = p[j]

//     if ((i == 0 && j == 0) || saveStoreGet(i - 1, j - 1)) {
//       return isMatchStraight(sympol, pattern)
//     }

//     if (pattern === ANY_SEQUENCE_SYMBOL && reachedPrioritySymbol(i, j)) {
//       return true
//     }

//     return false
//   }

//   for (let i = 0; i < s.length; i++) {
//     store.push([])

//     for (let j = 0; j < p.length; j++) {
//       store[i][j] = iterateMatch(i, j)
//     }
//   }

//   return store
// }

// const isMatchStraight = (s, p) => {
//   return (
//     s === p || (p === ANY_CHARACTER_SYMBOL && s) || p === ANY_SEQUENCE_SYMBOL
//   )
// }

// console.log(isMatch('abcdabcdi', '*bcdi'))
