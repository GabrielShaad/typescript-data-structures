class LinkedListNode {
  value: unknown;
  next: { value: unknown; next: unknown };

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: LinkedListNode;
  tail: LinkedListNode;
  length: number;

  constructor(value) {
    this.head = new LinkedListNode(value);

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next as LinkedListNode;
    }
    return array;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    const newNode: LinkedListNode = { next: null, value };

    const leader = this.traverseToIndex(index - 1);
    const pointer = leader.next;

    leader.next = newNode;
    newNode.next = pointer;

    this.length++;

    return this.printList();
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode: LinkedListNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next as LinkedListNode;
      counter++;
    }

    return currentNode;
  }
}
