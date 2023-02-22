/**
 * @param {number[]} n - a positive integer
 * @return {number} - a positive integer
 */

var missingNumber = function(list) {
  let ans = list.length

  for (let i = 0; i < list.length; i++) {
    ans ^= i
    ans ^= list[i]
  }

  return ans
};

console.log(missingNumber([1, 2, 3, 4, 5, 6]))