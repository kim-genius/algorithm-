const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let N = input.shift();

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(element) {
    let current = this.heap.length;

    while (current > 1) {
      const parent = Math.floor(current / 2);
      if (this.heap[parent] > element) {
        this.heap[current] = this.heap[parent];
        current = parent;
      } else break;
    }
    this.heap[current] = element;
  }

  remove() {
    let top = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      let current = 1;
      let leftChild = current * 2;
      let rightChild = current * 2 + 1;
      while (this.heap[leftChild]) {
        let CompareChild = leftChild;
        if (
          this.heap[rightChild] &&
          this.heap[leftChild] > this.heap[rightChild]
        ) {
          CompareChild = rightChild;
        }
        if (this.heap[CompareChild] < this.heap[current]) {
          [this.heap[CompareChild], this.heap[current]] = [
            this.heap[current],
            this.heap[CompareChild],
          ];
          current = CompareChild;
        } else break;
        leftChild = current * 2;
        rightChild = current * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return 0;
    }
    return top;
  }

  getSize() {
    return this.heap.length - 1;
  }
}

const PQ = new MinHeap();
for (const Order of input) {
  if (Order === 0) {
    console.log(PQ.remove());
  } else {
    PQ.insert(Order);
  }
}
