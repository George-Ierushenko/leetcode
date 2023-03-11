
var MedianFinder = function() {

};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    // // const mid = this.store.length / 2

    // if (mid % 1) {
    //     // return this.store[Math.floor(mid))]
    // }

    // return (this.store[mid] + this.store[mid + 1]) / 2
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const parentIndex = (i) => Math.floor((i - 1) / 2);
const leftChildIndex = (i) => 2 * i + 1;
const rightChildIndex = (i) => 2 * i + 2;

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const heapifyUp = (arr, i) => {
  const parent = parentIndex(i);
  if (i > 0 && arr[parent] < arr[i]) {
    swap(arr, i, parent);
    heapifyUp(arr, parent);
  }
};

const heapifyDown = (arr, i) => {
  const left = leftChildIndex(i);
  const right = rightChildIndex(i);
  let max = i;
  if (left < arr.length && arr[left] > arr[i]) max = left;
  if (right < arr.length && arr[right] > arr[i]) max = right;
  if (max !== i) {
    swap(arr, i, max);
    heapifyDown(arr, max);
  }
};

const peek = (arr) => arr[0];
const poll = (arr) => {
  const max = arr[0];
  arr[0] = arr.pop();
  heapifyDown(arr, 0);
  return max;
};
const add = (arr, value) => {
  arr.push(value);
  heapifyUp(arr, arr.length - 1);
};

const maxHeap = (arr) => {
  return {
    peek: () => peek(arr),
    poll: () => poll(arr),
    add: (value) => add(arr, value)
  };
};

const arr = []
const heap = maxHeap(arr)

heap.add(1)
heap.add(3)
heap.add(5)
heap.add(9)
heap.add(10)
heap.add(15)
heap.add(16)

console.log(arr)