/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < nums1.length; i++) {
      if (m < 1) {
        nums1[i] = nums2.shift()

        continue
      }

      if (nums1[i] > nums2[0]) {
        nums1.splice(i, 0, nums2[0])
        nums1.pop()
        nums2.shift()
      } else m -= 1
    }

    return nums1
};
const arr1 = [1,2,3,0,0,0]
console.log(merge(arr1, 3, [2,5,6], 3))