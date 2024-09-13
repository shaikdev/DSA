class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class ClassList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // prepend
  prepend(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  // append
  append(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.prepend(node);
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.size++;
    }
  }

  // isEmpty
  isEmpty() {
    return this.size === 0;
  }

  // removeFromEnd
  removeFromEnd() {
    if (this.isEmpty()) {
      return console.log("The list is Empty");
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.size--;
  }

  // removeFromStart
  removeFromStart() {
    if (this.isEmpty()) {
      return console.log("The list is Empty");
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    console.log("Removed value is", value);
  }

  // print
  print() {
    if (this.isEmpty()) {
      return console.log("The list is Empty");
    }
    let curr = this.head;
    let str = "";
    while (curr) {
      str += `${curr.value} `;
      curr = curr.next;
    }
    console.log("The print values are", str);
  }

  insert(value, index) {
    const node = new Node(value);
    if (this.isEmpty() || index === 0) {
      this.prepend(value);
    } else if (this.size === index) {
      this.append(value);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      node.prev = prev;
      prev.next.prev = node;
      prev.next = node;
      this.size++;
    }
  }

  // reversePrint
  reversePrint() {
    if (this.isEmpty()) {
      return console.log("The list is Empty");
    }
    let curr = this.tail;
    let str = "";
    while (curr) {
      str += `${curr.value} `;
      curr = curr.prev;
    }
    console.log("The reverse print values are: ", str);
  }
}

const list = new ClassList();

list.prepend(10);
list.append(20);
list.append(40);
list.print();
list.insert(30, 2);
list.reversePrint();
