/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function (lists) {
  let merged = null

  let cur = null
  const pointers = lists

  while (pointers.some((v) => v?.val !== undefined)) {
    const indexOfSmallest = pointers.reduce(
      (lastIndex, v, i) =>
        (v?.val ?? Infinity) < (pointers[lastIndex]?.val ?? Infinity)
          ? i
          : lastIndex,
      0
    )

    if (cur == null) {
      merged = cur = constructNode(pointers[indexOfSmallest].val)
    } else {
      cur = cur.next = constructNode(pointers[indexOfSmallest].val)
    }

    pointers[indexOfSmallest] = pointers[indexOfSmallest].next
  }

  return merged
}

const constructNode = (val, next) => ({
  val: val === undefined ? 0 : val,
  next: next === undefined ? null : next,
})
