class Node {
  constuctor(value) {
    this.value = value;
    this.next = null;
  }
}

class ClassList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  // prepand
  prepand(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  // append
  append(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.prepand(node);
    } else {
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  }

  // removeFromEnd
  removeFromEnd() {
    if (this.size === 0) return;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      return;
    }
    let prev = this.head;
    while (prev.next !== this.tail) {
      prev = prev.next;
    }
    prev.next = null;
    this.tail = prev;
    this.size--;
  }

  // removeFromStart
  removeFromStart() {
    if (this.size === 0) return;
    const value = this.head.value;
    console.log("removed Value is: ", value);
    this.head = this.head.next;
    this.size--;
  }

  // isEmpty
  isEmpty() {
    return this.size === 0;
  }

  // reverse
  reverse() {
    if (this.isEmpty()) {
      return console.log("The list is empty");
    }
    let curr = this.head;
    let prev = null;
    let next = null;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.tail = this.head;
    this.head = prev;
  }

  // print
  print() {
    if (this.isEmpty()) {
      return console.log("The list is Empty");
    }
    let curr = this.head;
    let str = "";
    while (curr) {
      str += `${curr.value} " "`;
      curr = curr.next;
    }
    console.log("The values are: ", str);
  }
}
