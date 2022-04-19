// /**
//  * @param {string} s
//  * @param {number} numRows
//  * @return {string}
//  */

var convert = function (s, numRows) {
  if (numRows == 1) return s

  var converted = ''

  const zigzagLength = numRows - 2
  const step = zigzagLength + numRows
  const zigzagPoints = generateInitZigzagPoints(zigzagLength, numRows)

  const isOutOfBounds = (num) => num >= s.length
  const processZigzagIndex = (zigzag) => {
    var index = zigzagPoints.findIndex((v) => v == zigzag)
    if (index === -1) return

    converted += s[zigzag]
    zigzagPoints[index] += step

    if (!isOutOfBounds(zigzagPoints[index])) return
    zigzagPoints.splice(index, 1)
  }

  for (let i = 0; i < numRows; i++) {
    var currentStep = i

    if (i == 2) {
      console.log(2)
    }

    while (true) {
      const zigzagIndex = currentStep - 2 * i
      if (isOutOfBounds(zigzagIndex)) break

      processZigzagIndex(zigzagIndex)

      var char = s.charAt(currentStep)

      currentStep += step
      converted += char
    }
  }

  return converted
}

const generateInitZigzagPoints = (zigzagLength, numRows) => {
  const places = []

  for (let i = numRows; i < numRows + zigzagLength; i++) {
    places.push(i)
  }

  return places
}

console.log(convert('ABCDE', 4))
