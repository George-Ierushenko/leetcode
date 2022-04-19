/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
  var head = null

  var r = head
  var f = list1,
    s = list2

  while (f?.val !== undefined || s?.val !== undefined) {
    const value = Math.min(f?.val ?? Infinity, s?.val ?? Infinity)

    if (r === null) head = r = constructNode(value)
    else r = r.next = constructNode(value)

    if (f?.val === value) {
      f = f.next

      continue
    }

    s = s.next
  }

  return head
}

const constructNode = (val, next) => ({
  val: val === undefined ? 0 : val,
  next: next === undefined ? null : next,
})

const list1 = {
  val: undefined,
  next: null,
}

const list2 = {
  val: 1,
  next: null,
}

console.log(JSON.stringify(mergeTwoLists(list1, list2), null, 1))
