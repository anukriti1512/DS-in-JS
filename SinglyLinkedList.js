// Singly linked list =>  Consists of nodes ,and each node has a value and a pointer to another node. LL contains head , tail and length property
// No indexing is present

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    //if no node is present
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    console.log("Linked List", this.head, "Total length of LL", this.length);
  }

  pop() {
    // if LL is empty
    if (!this.head) {
      return undefined;
    }
    // take 2 varibles current and newTail // current will mark the current node and will reach till the original tail and newTail is second last node i.e. one node before tail
    var current = this.head;
    var newTail = current;
    // loop until current pointer reaches the last node
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // make newTail as the actual tail of the LL
    this.tail = newTail;
    this.tail.next = null; // as its a singly LL
    this.length--;

    // if only one item is was present in LL and that too deleted then reset the LL
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    console.log("popped node", current);
    console.log("current LL", this.head);
  }

  //  Removing first node from the LL i.e shift operation in an array
  shift() {
    // if no node is present
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    console.log("popped node in shift operation ", currentHead);
    console.log("Actual LL", this.head);
  }

  // Adding new node to the start of the LL i.e. Unshift operation in an Array
  unshift(val) {
    var newNode = new Node(val);
    // if no node is present
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    console.log(" Actual LL", this.head);
  }

  // get Method => its a method that takes an index as an input and it returns the item(node) at that particular index.
  // Implementation => we need to traverse the list from the start to reach and read the value out of that index.
  get(index) {
    // if invalid index is provided
    if (index < 0 || index >= this.length) return null;
    var counter = 0; // to keep track of the index
    var current = this.head;
    // loop until counter and index have the same value
    while (current !== index) {
      current = current.next;
      counter++;
    }
    console.log("return node at index ", index, current);
    return current;
  }

  // set method => its a method where we change the value of the node based on the porition i.e. the index provided.
  // implementation => takes 2 arguments (index , valueToSet)
  // get the node using get method defined above , if node is found then change value , otherwise return false
  set(index, setValue) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = setValue;
      console.log("current LL after set operation ", this.head);
      return true;
    }
    return false;
  }

  // insert method => similar to set,it adds a new node to the linkedlist at a specific location
  //implmentation => function takes 2 arguments (index , value) , instead of updating the index value, it adds a new node at that index with the value
  insert(index, value) {
    // if invalid index is passed
    if (index < 0 || index > this.length) {
      return null;
    }
    // if last index is provided ie. the exact length  then we cann use push method of the LL defined above
    if (index === this.length) return this.push(value);

    // if index is 0 i.e the start of the LL => use unshift operation
    if (index === 0) return this.unshift(this.value);

    var newNode = new Node(value);
    var prev = this.get(index - 1); // get prev index node
    var temp = prev.next; // get next index node
    prev.next = newNode; // make prev node point to the new nnode
    newNode.next = temp; // make new node point to the next index node which was stored in temp variable
    this.length++;
    console.log("Actual LL after insert operation ", this.head);
    return true;
  }
}

// creating LL and performing some operations
var LL = new Linkedlist();
LL.push(5);
LL.push(50);
LL.push(6);
LL.push(7);

LL.pop();
LL.shift();
LL.unshift(100);
