/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const counter = nums.reduce((o, v) => (o[v] = (o[v] ?? 0) + 1, o), {})

  const backtrack = (prev = [], counter) => {
    const next = []

    if (prev.length >= nums.length) return [prev]

    for (const key in counter) {
      const count = counter[key]
      if (counter[key] < 1) continue

      const copy = [...prev, +key]
      next.push(...backtrack(copy, {...counter, [key]: count - 1}))
    }

    return next
  }

  return backtrack([], counter)
};


console.log(permuteUnique([1, 1, 2]))