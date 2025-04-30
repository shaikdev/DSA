class Node {
  constructor(value) {
    this.value = value;
    this.back = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = node;
      node.back = curr;
    }
  }

  deleteHead() {
    if (this.head === null || this.head.next === null) {
      return;
    } else {
      this.head = this.head.next;
      this.head.back = null;
    }
  }

  deleteTail() {
    if (this.head === null) {
      return;
    }
    if (this.head.next === null) {
      return this.head;
    }

    let curr = this.head;
    while (curr.next.next !== null) {
      curr = curr.next;
    }
    curr.next = null;
  }

  removeElementByPosition(position) {
    if (this.head === null) {
      return (this.head = null);
    }
    let prev = null;
    let front = null;
    let kNode = this.head;
    let count = 0;

    while (kNode !== null) {
      count++;
      if (count === position) break;
      kNode = kNode.next;
    }
    prev = kNode.back;
    front = kNode.next;

    if (prev === null && front === null) {
      return (this.head = null);
    } else if (prev === null) {
      return this.deleteHead(this.head);
    } else if (front === null) {
      return this.deleteTail(this.head);
    }

    if (prev !== null && front !== null) {
      prev.next = front;
      front.back = prev;
      kNode.next = null;
      kNode.back = null;
      return;
    }
  }
  addElementByPosition(value, position) {
    const node = new Node(value);
    if (position === 1) {
      return this.beforeHead(value);
    }

    let count = 0;
    let kNode = this.head;

    while (kNode !== null) {
      count++;
      if (count === position) {
        node.next = kNode;
        node.back = kNode.back;
        kNode.back.next = node;
        kNode.back = node;
        break;
      }
      kNode = kNode.next;
    }
  }

  deleteByNode(node) {
    if (this.head === node) {
      return this.deleteHead();
    }
    node.back.next = node.next;
    node.next.back = node.back;
    return;
  }

  beforeHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head.back = node;
    this.head = node;
    return;
  }
  beforeTail(value) {
    const node = new Node(value);
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    node.next = curr;
    node.back = curr.back;
    curr.back.next = node;
    curr.back = node;
  }

  addBeforeKthElement(position, value) {
    if (position === 1) {
      return this.beforeHead(value);
    }
    const node = new Node(value);

    let curr = this.head;
    let count = 0;

    while (curr !== null) {
      count++;
      if (count === position) {
        node.next = curr;
        node.back = curr.back;
        curr.back.next = node;
        curr.back = node;
        break;
      }
      curr = curr.next;
    }
  }

  deleteBeforeNode(node) {
    if (node == this.head || node === null) {
      return;
    }
    if (node.back.back !== null) {
      node.back.back.next = node;
      node.back = node.back.back;
      return;
    } else {
      return this.deleteHead();
    }
  }

  reverse() {
    let curr = this.head;
    let last = null;
    while (curr !== null) {
      last = curr.back;
      curr.back = curr.next;
      curr.next = last;
      curr = curr.back;
    }
    if (last.back !== null) {
      this.head = last.back;
    }
  }

  print() {
    let curr = this.head;
    let str = "";
    while (curr.next !== null) {
      str += `${curr.value} -> `;
      curr = curr.next;
    }
    str += `${curr.value}`;
    console.log(str);
  }
}

const list = new DoublyLinkedList();

const arr = [1, 3, 5, 7, 9];

arr.forEach((item) => list.add(item));
// list.print();
// list.deleteHead()
// list.print()
// list.deleteTail();
// list.removeElementByPosition(2);
// list.addElementByPosition(2, 2);
// list.deleteByNode(list.head);
// list.beforeTail(8);
// list.addBeforeKthElement(1,6)
// list.beforeHead(2)
// list.deleteBeforeNode(list.head.next.next.next.next);
list.reverse();
list.print();
