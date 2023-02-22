/**
 * @param {number[]} n - a positive integer
 * @return {number} - a positive integer
 */

var findMissingNumber = function(list) {
  let ans = 0

  const getMaxBit = (n) => {
    for (var max = 1; (n /= 2) > 1; max++);

    return max
  }

  const maxBit = getMaxBit(Math.max(...list))

  for (let shift = 0; shift < maxBit; shift++) {
    let numCount = (list.length >> shift) & 0x01
    let bitCount = 0

    for (let i = 0; i < list.length; i++) {
      numCount += (i >> shift) & 0x01
      bitCount += (list[i] >> shift) & 0x01
    }

    ans |= numCount - bitCount << shift
  }

  return ans
};

console.log(findMissingNumber([0, 1, 2, 3, 4, 5]))