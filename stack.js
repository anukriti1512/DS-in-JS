class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Implementation -
// Add and remove from the head element  i.e. head
class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      var temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    console.log(this.head);
    return ++this.length;
  }

  pop() {
    if (!this.head) return null;
    var temp = this.head;

    this.head = this.head.next;
    this.length--;
    console.log(this.head);
  }
}

var s = new Stack();
s.push(3);
s.push(5);
s.push(8);
s.push(9);
s.pop();
