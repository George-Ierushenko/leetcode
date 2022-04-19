/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseEvenLengthGroups = function (head) {
  let node = head
  let answer = sliceGroup(head, 1)
  let group = 1

  const jumpToGroup = (newGroup) => {
    group = newGroup

    while (--newGroup && node.next) node = node.next
  }

  while (node.next) {
    jumpToGroup(group + 1)
    if (group % 2 === 0) addToEnd(answer, sliceGroup(node, group))

    if (answer === null) {
      answer = reverseGroup(node, group)

      continue
    }

    addToEnd(answer, reverseGroup(node, group))
  }

  return answer
}

const sliceGroup = (head, k) => {
  if (head?.next === null || k == 1) {
    return constructNode(head?.val)
  }

  const node = sliceGroup(head?.next, k - 1)

  return constructNode(head.val, node)
}

const reverseGroup = (head, k) => {
  if (head.next === null || k === 1) {
    return constructNode(head.val)
  }

  const node = reverseGroup(head.next, k - 1)

  addToEnd(node, constructNode(head.val))

  return node
}

const addToEnd = (head, node) => {
  if (head.next === null) {
    head.next = node

    return
  }

  addToEnd(head.next, node)
}

const constructNode = (val, next) => ({
  val: val === undefined ? 0 : val,
  next: next === undefined ? null : next,
})

const reverseList = (head, k) => {
  let prev = null,
    cur = head

  for (let i = 0; i < k; i++) {
    const next = cur.next
    cur.next = prev

    prev = cur
    cur = next
  }

  return prev
}

const head = {
  val: 1,
  next: {
    val: 2,
    next: null,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
}

console.log(JSON.stringify(reverseList(head, 2), null, 1))

console.log(JSON.stringify(head, null, 1))
