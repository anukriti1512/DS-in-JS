class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Queue Implementation -> insert at the last , remove from the head
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // pushing new node at the last of the queue
  enqueue(val) {
    var newNode = new Node(val);
    // if queue is empty make new node as first and last
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    console.log("enqueue operation performed", this.first);
  }

  // removing node from the head of the queue
  dequeue() {
    // if queue is empty
    if (!this.first) return null;
    var temp = this.first;
    // if only one element is left
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    console.log("dequeue value", temp);
    console.log("actual queue", this.first);
  }
}

var Q = new Queue();
Q.enqueue(3);
Q.enqueue(4);
Q.enqueue(8);
Q.enqueue(9);
Q.dequeue();
