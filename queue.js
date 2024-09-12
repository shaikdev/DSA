// queue
class Queue {
  constructor() {
    this.items = [];
  }

  // enqueue
  enqueue(enqueue) {
    this.items.push(enqueue);
  }

  // dequeue
  dequeue() {
    return this.items.shift();
  }
  // peak
  peak() {
    if (this.items?.length > 0) return this.items[0];
    else null;
  }
  // isEmpty
  isEmpty() {
    return this.items.length === 0 ? true : false;
  }
  // print
  print() {
    console.log("Print", this.items.toString());
  }
  // size
  size() {
    return this.items?.length;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(40);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(40);
console.log("dequeue", queue.dequeue());
console.log("isEmpty", queue.isEmpty());
console.log("peak", queue.peak());
console.log("size", queue.size());
