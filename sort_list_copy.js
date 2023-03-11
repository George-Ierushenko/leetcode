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
var sortList = function(head) {
  if (!head?.next) return head

  var size = sizeof(head)

  for (let i = 0; Math.pow(2, i) < size; i++) {
    mergeEvery(head, Math.pow(2, i), size)
  }

  return head
}

var sizeof = (head) => {
  let cur = head, i = 0;

  while (cur) (i++, cur = cur.next)

  return i
}

var mergeEvery = (head, batch, size) => {
  let cur = head

  for (let i = 0; i < size - (size % batch); i += batch*2) {
    let tail = cur

    for (let j = 1; j < batch; j++) tail = tail.next

    merge(cur, tail, batch)

    for (let j = 0; j < batch*2; j++) cur = cur?.next
  }

}

var merge = (head, tail, size) => {
  let l = size, r = size
  let cur = head, head2 = tail.next
  let prev = null

  while (l !== 0 && r && head2) {
    if (r && head2 && (cur.val > head2.val)) {
      removeNode(tail, head2)

      if (prev == null) {
        insertNode(cur, head2)
        head2 = cur
        prev = cur
      } else {
        pushNode(prev, head2)
        prev = head2
      }

      cur = head2.next
      head2 = tail.next
      r--;

      continue
    }

    prev = cur
    cur = cur?.next
    l--;
  }
}

var insertNode = (head, node) => {
  const tmpval = head.val
  head.val = node.val
  node.val = tmpval

  const tmpnode = head.next
  head.next = node
  node.next = tmpnode
}

var pushNode = (prev, node) => {
  node.next = prev.next
  prev.next = node
}

var removeNode = (prev, node) => {
  prev.next = node.next
  node.next = null
}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const list = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))

sortList(list)
console.log()
