class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
      return this.head;
    }
  }

  removeHead() {
    if (this.head.next === null || this.head === null) {
      this.head = null;
    } else {
      let curr = this.head.next;
      this.head = curr;
    }
  }

  removeTail() {
    if (this.head.next === null) {
      this.head.next = null;
    } else {
      let curr = this.head;
      while (curr.next.next !== null) {
        curr = curr.next;
      }
      curr.next = null;
    }
  }

  search(value) {
    let curr = this.head;
    let isFind = false;
    while (curr != null) {
      if (curr.value === value) {
        isFind = true;
        break;
      }
      curr = curr.next;
    }
    return isFind;
  }

  insert(value, position) {
    const node = new Node(value);
    if (this.head === null) {
      if (position === 1) {
        this.head = node;
      }
    } else {
      let curr = this.head;
      let count = 0;
      let temp = null;
      while (curr !== null) {
        count++;
        if (count === position) {
          node.next = curr;
          temp.next = node;
          break;
        }
        temp = curr;
        curr = curr.next;
      }
    }
  }

  deleteByPosition(position) {
    if (this.head == null) {
      return "List is empty";
    }
    if (position === 1) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      let count = 0;
      let temp = null;
      while (curr !== null) {
        count++;
        if (count === position) {
          temp.next = curr.next;
          break;
        }
        temp = curr;
        curr = curr.next;
      }
    }
  }

  removeByValue(value) {
    let curr = this.head;
    let temp = null;
    while (curr !== null) {
      if (curr.value === value) {
        temp.next = curr.next;
        break;
      }
      temp = curr;
      curr = curr.next;
    }
  }

  addBeforeHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  addAfterTail(value) {
    const node = new Node(value);
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = node;
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;
    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    let node = "";
    let curr = this.head;
    while (curr.next !== null) {
      node += `${curr.value}, `;
      curr = curr.next;
    }
    node += `${curr.value}`;
    console.log(node);
    return;
  }
}

const array = [10, 20, 30, 40, 50];

const list = new LinkedList();

array.forEach((item) => list.add(item));

// list.removeHead();

// list.removeTail()

// console.log(list.search(40));

// list.insert(25, 3);

// list.deleteByPosition(3);

// list.removeByValue(20)

// list.addBeforeHead(5);

// list.addAfterTail(60)

list.reverse();

list.print();
