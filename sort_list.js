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
  var size = sizeof(head)

  for (let i = 0; i < size/2; i++) {
      mergeEvery(head, Math.pow(2, i))
  }

  return head
}

var sizeof = (head) => {
  let cur = head, i = 0;

  while (cur) (i++, cur = cur.next)

  return i
}

var mergeEvery = (head, every) => {

}

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

console.log(sortList(new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))))
