class QueueNode {
  value: unknown;
  next: { value: unknown; next: unknown };

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  first: QueueNode;
  last: QueueNode;
  length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new QueueNode(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next as QueueNode;
    this.length--;

    return this;
  }

  isEmpty() {
    return !this.length;
  }
}

const myQueue = new Queue();

console.log(myQueue.enqueue("Joy"));
console.log(myQueue.enqueue("Matt"));
console.log(myQueue.enqueue("Pavel"));
console.log(myQueue.enqueue("Samir"));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
