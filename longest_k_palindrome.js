const longestKPalindrome = (array1, array2) => {
  let k = 100

  while (k != 1) {}

  return k
}

const hasKPalindrome = (array1, array2, k) => {
  const hashSet = hashValuesToK(array2, k)

  for (let i = 0; i < array1.length - k + 1; i++) {
    for (let j = 0; j < k / 2 - 1; j++) {
      const value = array1[i + j] - array1[i + k - 1 - j]

      if (!hashSet[value]) continue
      return true
    }
  }

  return false
}

const hashValuesToK = (array, k) => {
  const hashSet = {}

  for (let i = 0; i < array.length - k + 1; i++) {
    for (let j = 0; j < k / 2 - 1; j++) {
      const value = array[i + k - 1 - j] - array[i + j]

      hashSet[value] = 1
    }
  }

  return hashSet
}

console.log(hasKPalindrome([1, 1, 4, 3, 2], [4, 3, 1, 2, 2], 3))
