class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Implementation -
// Add and remove node from the head element  i.e. head
class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //pushing new node on top of the stack
  push(val) {
    var newNode = new Node(val);
    //if no node is present in stack -> make new node as head element else push new node at the head element of the stack
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
  // removing node from the top of the stack i.e. from head
  pop() {
    if (!this.head) return null;
    var temp = this.head;

    this.head = this.head.next;
    this.length--;
    console.log(this.head);
  }
}
// running code
var s = new Stack();
s.push(3);
s.push(5);
s.push(8);
s.push(9);
s.pop();
