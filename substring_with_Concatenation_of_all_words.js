/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

var findSubstring = function (s, words) {
  const { wordsHash, keysHash, mainKey } = hashInitialWords(words)
  const wordLength = words[0].length

  const ans = []

  for (let i = 0; i < s.length; i++) {
    const curSeq = {}
    let curKey = 0

    for (let j = i; j <= s.length - wordLength; j += wordLength) {
      const cur = s.substring(j, j + wordLength)
      if (wordsHash[cur] === undefined) break

      curSeq[cur] = (curSeq[cur] ?? 0) + 1
      if (curSeq[cur] > wordsHash[cur]) break

      curKey += keysHash[cur]
      if (mainKey == curKey) ans.push(i)
    }
  }

  return ans
}

const hashInitialWords = (words) => {
  const wordsHash = {}
  const keysHash = {}
  let mainKey = 0

  for (let i = 0; i < words.length; i++) {
    const v = words[i]

    wordsHash[v] = (wordsHash[v] ?? 0) + 1

    if (keysHash[v] === undefined) keysHash[v] = i + 1
    mainKey += keysHash[v]
  }

  return { keysHash, wordsHash, mainKey }
}

console.log(findSubstring('abaababbaba', ['ab', 'ba', 'ab', 'ba']))
