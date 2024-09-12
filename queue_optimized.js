class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // enqueue
  enqueue(enqueue) {
    this.items[this.rear] = enqueue;
    this.rear++;
  }

  // dequeue
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  // peak
  peak() {
    if (this.items !== null) return this.items[this.front];
    else return null;
  }

  // isEmpty
  isEmpty() {
    return this?.items === null;
  }

  // size
  size() {
    return this.rear - this.front;
  }

  // print
  print() {
    consoole.log("print", this.items);
  }
}

const queue = new Queue();
queue.enqueue(50);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(30);
queue.enqueue(30);

console.log("dequeue", queue.dequeue());
console.log("isEmpty", queue.isEmpty());
console.log("Peak", queue.peak());
console.log("size", queue.size());
