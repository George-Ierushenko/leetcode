/**
 * @param {number[]} nums
 * @return {number[]}
 */

var singleNumber = function(nums) {
  let group1 = 0

  for (let shift = 0; shift < 32; shift++) {
    let f, s

    nums.forEach(
      (n) => {
        if (n >> shift & 1) return s ^= n

        f ^= n
        group1 += 1
      }
    )

    if (!(group1 % 2)) continue

    return [f, s]
  }
};

console.log(singleNumber([1, 1, 2, 3, 88, 88])) // [2, 3]