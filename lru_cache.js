/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.size = 0
  this.map = {}

  this.tail = { prev: null, tail: true }
  this.head = { next: this.tail, head: true }
  this.tail.prev = this.head
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  const node = this.map[key]
  if (!node) return -1

  removeNode(node)

  this.head.next.prev = node
  node.next = this.head.next
  node.prev = this.head
  this.head.next = node

  return node.value
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  const node = this.map[key]

  if (node) {
    delete this.map[key]

    removeNode(node)
    this.size -= 1
  }

  if (this.capacity === this.size && !node) {
    delete this.map[this.tail.prev.key]

    removeNode(this.tail.prev)

    this.size -= 1
  }

  const newNode = new DoubleLinkedList(value, key, this.head.next, this.head)
  this.head.next.prev = newNode
  this.head.next = newNode
  this.map[key] = newNode
  this.size += 1
};

const removeNode = (node) => {
  const nodeNext = node.next
  const nodePrev = node.prev
  nodePrev.next = nodeNext
  nodeNext.prev = nodePrev
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

var DoubleLinkedList = function(value, key, next, prev) {
  return { value, next, prev, key }
}

const lru = new LRUCache(2)
lru.put(2, 2)
lru.put(1, 1)
lru.put(2, 2)
lru.put(4, 4)
console.log(lru.get(1))
console.log(lru.get(2))

console.log(lru)