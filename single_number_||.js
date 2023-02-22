/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
  let ans = 0, sum

  for (let i = 0; i < 32; i++) {
      sum = nums.reduce((r, n, i) => (r += n & 1, nums[i] >>= 1, r), 0)

      ans += (sum % 3 !== 0) << i
  }

  return ans
};

console.log(singleNumber([1, 1, 1, 1290]))