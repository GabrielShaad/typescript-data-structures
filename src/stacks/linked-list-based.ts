class StackNode {
  value: unknown;
  next: { value: unknown; next: unknown };

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  top: StackNode;
  bottom: StackNode;
  length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new StackNode(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;

      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next as StackNode;
    this.length--;

    return this;
  }

  isEmpty() {
    return !this.length;
  }
}
