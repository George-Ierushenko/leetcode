const W = (row, pos) => {
  const pyramidLayer = [0]

  for (let layer = 0; layer < row; layer++) {
    pyramidLayer.push(0)

    let prev = 0
    for (let i = 0; i < pyramidLayer.length; i++) {
      counter2++
      const current = pyramidLayer[i] + (pyramidLayer.length === i + 1 ? 0 : 1)

      pyramidLayer[i] = prev + current / 2
      prev = current / 2
    }
  }
  return pyramidLayer[pos]
}

const memo = {}

const dpW = (row, pos) => {
  const memoKey = `${row}, ${pos}`
  if (memo[memoKey]) return memo[memoKey]

  if (row === 0) return 0

  const leftTopBrickPressure = pos === 0 ? 0 : (dpW(row - 1, pos - 1) + 1) / 2
  const rightTopBrickPressure = pos === row ? 0 : (dpW(row - 1, pos) + 1) / 2

  const value = leftTopBrickPressure + rightTopBrickPressure
  memo[memoKey] = value

  return value
}

const printPyramid = (pyramid) => {
  for (let i = 0; i < pyramid.length; i++) {
    console.log(' '.repeat(pyramid.length - i) + pyramid[i].join(' '))
  }
}
console.time('optimizeW')
optimizeW(7000, 5000)
console.timeEnd('optimizeW')

console.time('W')
W(7000, 5000)
console.timeEnd('W')
