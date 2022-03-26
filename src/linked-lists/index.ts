class LinkedListNode {
  value: unknown;
  next: { value: unknown; previous: unknown; next: unknown };
  previous: { value: unknown; previous: unknown; next: unknown };

  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
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

    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);

    newNode.next = this.head;
    this.head.previous = null;
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

  traverseToIndex(index) {
    let counter = 0;
    let currentNode: LinkedListNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next as LinkedListNode;
      counter++;
    }

    return currentNode;
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

    const newNode: LinkedListNode = { previous: null, next: null, value };

    const leader: LinkedListNode = this.traverseToIndex(index - 1);
    const follower = leader.next as LinkedListNode;

    leader.next = newNode;
    newNode.previous = leader;
    newNode.next = follower;
    follower.previous = newNode;

    this.length++;

    return this.printList();
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next as LinkedListNode;

    leader.next = follower.next;
    follower.previous = leader;

    this.length--;

    return this.printList();
  }
}
