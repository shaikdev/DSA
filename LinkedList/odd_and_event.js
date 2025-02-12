// TODO: Segregate even and odd nodes in a Linked List
// Input: Linked list: 1->2->3->4->5
// Output: 1->3->5->2->4

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
    let curr = this.head;
    let result = "";
    while (curr !== null) {
      result += curr.value + " -> ";
      curr = curr.next;
    }
    return console.log(result);
  }
}

const list = new LinkedList();

const array = [1, 2, 3, 4, 5];

array.forEach((item) => list.add(item));

const oddEventList = (data) => {
  if (data === null || data.next === null) {
    return data;
  }
  let odd = data;
  let even = data.next;
  let evenHead = data.next;
  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return data;
};

const data = oddEventList(list.head);

list.head = data;
list.print();
