// TODO: Add Two Numbers Represented as Linked List
// Input: num1 = 4 -> 5, num2 = 3 -> 4 -> 5
// Output: 3 -> 9 -> 0
// Explanation: Sum of 45 and 345 is 390.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
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
    return;
  }

  print() {
    let curr = this.head;
    let result = "";
    while (curr.next !== null) {
      result += curr.value + " -> ";
      curr = curr.next;
    }
    result += `${curr.value}`;
    return console.log(result);
  }
}

let num1 = [4, 5];
let num2 = [3, 4, 5];

const LinkedList = new List();
const LinkedList2 = new List();

num1.forEach((item) => LinkedList.add(item));
num2.forEach((item) => LinkedList2.add(item));

LinkedList.reverse();
num1 = LinkedList.head;

LinkedList2.reverse();
num2 = LinkedList2.head;

function addTwoNumbers(num1, num2) {
  let temp1 = num1;
  let temp2 = num2;
  let carry = 0;
  let dummyNode = new Node(-1);
  let curr = dummyNode;
  while (temp1 !== null || temp2 !== null) {
    let sum = carry;
    if (temp1) sum = sum + temp1.value;
    if (temp2) sum = sum + temp2.value;
    const node = new Node(sum % 10);
    carry = Math.floor(sum / 10);
    curr.next = node;
    curr = curr.next;
    if (temp1) temp1 = temp1.next;
    if (temp2) temp2 = temp2.next;
  }

  if (carry) {
    const node = new Node(carry);
    curr.next = node;
  }
  return dummyNode.next;
}

const result = addTwoNumbers(num1, num2);

LinkedList.head = result;
LinkedList.reverse();
LinkedList.print();
