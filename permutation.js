/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const backtrack = (prev = [[]], n = 0) => {
      if (nums.length <= n) return prev

      const next = []
      while (mutation = prev.pop()) {
          for (let i = 0; i < nums.length; i++) {
              if (mutation[i] === undefined) {
                  const copy = [...mutation]
                  copy[i] = nums[n]
                  next.push(copy)
              }
          }
      }

      return backtrack(next, n+1)
  }

  return backtrack()
};


console.log(permute([1, 2, 3]))