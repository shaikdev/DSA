class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
  }
  // isFull
  isFull() {
    return this.currentLength === this.capacity;
  }
  // isEmpty
  isEmpty() {
    return this.currentLength === 0;
  }
  // Enqueue
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) this.front = this.rear;
    } else return "Queue is full";
  }

  // Dequeue
  dequeue() {
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.rear = -1;
      this.front = -1;
    }
    return item;
  }

  // Peak
  peak() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    } else return "Queue is empty";
  }

  // print
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log("Print", str);
    }
  }
}

const queue = new CircularQueue(5);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log("dequeue", queue.dequeue());
console.log("dequeue", queue.dequeue());
console.log("dequeue", queue.dequeue());
queue.enqueue(60);
console.log("Peak", queue.peak());
queue.print();

queue.print();
