// TODO:Sort a LinkedList of 0's, 1's and 2's
// Input: LinkedList: 1->2->2->1->2->0->2->2
// Output: 0->1->1->2->2->2->2->2
// Explanation: All the 0s are segregated to the left end of the linked list, 2s to the right end of the list, and 1s in between.

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

const array = [1, 2, 2, 1, 2, 0, 2, 2];

const list = new LinkedList();
array.forEach((item) => list.add(item));

const segregated = (head) => {
  let zeroHead = new Node(-1);
  let oneHead = new Node(-1);
  let twoHead = new Node(-1);
  //   track last node
  let zero = zeroHead;
  let one = oneHead;
  let two = twoHead;
  let temp = head;
  while (temp !== null) {
    if (temp.value === 0) {
      zero.next = temp;
      zero = temp;
    } else if (temp.value === 1) {
      one.next = temp;
      one = temp;
    } else {
      two.next = temp;
      two = temp;
    }
    temp = temp.next;
  }
  zero.next = oneHead.next ? oneHead.next : twoHead.next;
  one.next = twoHead.next;
  two.next = null;
  return zeroHead.next;
};

const newHead = segregated(list.head);
// console.log(newHead);
list.head = newHead;
list.print();
