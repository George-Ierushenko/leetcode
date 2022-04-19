/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  const merged = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    const [l, r] = intervals[i]
    const last = merged.pop()

    if ((l <= last[1] && last[1] <= r) || last[1] > r) {
      last[1] = Math.max(last[1], r)
      merged.push(last)

      continue
    }

    merged.push(...[last, intervals[i]])
  }

  return merged
}

var sorter = ([aF, aS], [bF, bS]) => {
  if (aF == bF) return aS - bS

  return aF - bF
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
)
