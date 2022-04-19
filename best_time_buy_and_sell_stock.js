/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let maxProfit = 0

  let l = 0,
    r = 1

  while (r < prices.length) {
    if (prices[l] > prices[r]) {
      ;(l = r), r++

      continue
    }

    maxProfit = Math.max(prices[r] - prices[l], maxProfit)
    r++
  }

  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
