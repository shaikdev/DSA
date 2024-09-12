class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class ClassList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  // getSize
  getSize() {
    return this.size;
  }

  // isEmpty
  isEmpty() {
    return this.size === 0;
  }

  // prepend
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // append
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  // insert
  insert(value, index) {
    if (index < 0 || this.size < index) {
      return;
    }
    let prev = this.head;
    if (index === 0) {
      this.prepand(value);
      this.size++;
    } else {
      const node = new Node(value);
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      console.log("prev", prev);
      node.next = prev.next;
      prev.next = node;
    }
  }

  removeFromIndex(index) {
    if (index < 0 || this.size < index) {
      return;
    }
    let prev = this.head;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      let removedNode = prev.next;
      prev.next = removedNode.next;
      console.log("removed value is", removedNode.next.value);
    }
    this.size--;
  }

  removeFromValue(value) {
    if (this.isEmpty()) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let prev = this.head;
      let removeNode = null;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
      }
      return;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
  }

  // print

  print() {
    if (this.isEmpty()) {
      return console.log("List is empty");
    }

    let curr = this.head;
    let str = "";
    while (curr) {
      str += `${curr.value}  `;
      curr = curr.next;
    }
    console.log(str);
  }
}

const list = new ClassList();

list.prepand(1);
list.append(2);
list.append(4);
list.insert(3, 2);

list.print();

console.log(list.isEmpty());
