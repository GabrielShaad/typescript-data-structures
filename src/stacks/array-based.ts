class ArrayStack {
  stack: unknown[];

  constructor() {
    this.stack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  push(value) {
    this.stack.push(value);

    return this;
  }

  pop() {
    this.stack.pop();

    return this;
  }

  isEmpty() {
    return !this.stack.length;
  }
}

const myStack = new ArrayStack();
console.log(myStack.peek());
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.isEmpty());
console.log(myStack.pop());
console.log(myStack.isEmpty());
