/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
  const merged = binaryMerge(nums1, nums2)

  const median = merged.length / 2
  const floored = Math.floor(median)

  if (median == floored) {
    return (merged[median - 1] + merged[median]) / 2
  }

  return merged[floored]
}

var binaryMerge = (list1, list2) => {
  const merged = []
  let l = 0,
    r = 0

  while (l != list1.length || r != list2.length) {
    var [v1, v2] = [list1[l] ?? Infinity, list2[r] ?? Infinity]

    if (v1 > v2) {
      merged.push(v2)
      r++

      continue
    }

    l++
    merged.push(v1)
  }

  return merged
}

console.log(findMedianSortedArrays([1, 2], [3, 4]))
