// TODO: Remove Nth Node From End of List
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

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
  print() {
    let node = "";
    let curr = this.head;
    while (curr.next !== null) {
      node += `${curr.value} -> `;
      curr = curr.next;
    }
    node += `${curr.value}`;
    console.log(node);
    return;
  }
}

const list = new LinkedList();

const array = [1, 2, 3, 4, 5];

array.forEach((item) => list.add(item));
// list.print();
let head = list.head;

const removeKthNodeFromEnd = (head, position) => {
  let fastNode = head;
  let slowNode = head;

  for (let i = 0; i < position; i++) {
    fastNode = fastNode.next;
  }
  if (fastNode === null) {
    return head.next;
  }

  while (fastNode.next !== null) {
    fastNode = fastNode.next;
    slowNode = slowNode.next;
  }
  slowNode.next = slowNode.next.next;
  return head;
};

const data = removeKthNodeFromEnd(head, 2);
list.head = data;
list.print();
