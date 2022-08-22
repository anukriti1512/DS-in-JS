// Doubly LinkedLists -> They point in both the directions.
// It takes more memory compared to singly linked list

// Following operations have been implemented in the below code
// PUSH
//POP
//SHIFT
//UNSHIFT
//GET
//SET
//INSERT
//REMOVE

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    // if no nodes are present
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
      console.log("Actual LL after PUSH operation ", this.head);
    }
  }

  pop() {
    // if no nodes are present
    if (this.length === 0) return undefined;
    var poppedNode = this.tail;
    // if only one node is present
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    console.log("popped node after POP operation ", poppedNode);
    console.log("Actual LL after POP operation", this.head);
    return poppedNode;
  }

  // Removing start node i.e. shift operation
  shift() {
    if (this.length === 0) return null;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      this.oldHead.next = null;
    }
    this.length--;
    console.log("Actual LL after SHIFT operation", this.head);
    return oldHead;
  }

  // add value to the start of the LL
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    console.log("Actual LL after UNSHIFT operation", this.head);
  }

  //GET => get the node based on the index provided
  get(index) {
    // IMPLEMENTATION In Doubly LL -> If index is greator than half the length of the list -> loop through the list starting from the tail and loop towards the middle, Return the node once its found.
    ///////////////////
    // if invalid index is provided
    if (index < 0 || index >= this.length) return undefined;
    var count; // will keep track  of the index count
    var currentNode;

    // if index is present in the first half of the LL
    if (index < this.length / 2) {
      count = 0;
      currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    }
    // if index is present  in the second half of the LL i.e need to traverse form the tail
    else {
      count = this.length - 1;
      currentNode = this.tail;
      while (index !== count) {
        currentNode = currentNode - prev;
        count--;
      }
    }
    console.log("Found Node after GET operation ", currentNode);
    return currentNode;
  }

  Set(index, value) {
    var foundNode = this.get(index);
    if (foundNode !== undefined) {
      foundNode.value = value;
      console.log("Actual LL after SET operation", this.head);
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false; // invalid index
    if (index === 0) return this.unshift(val); // insert at the start
    if (index === this.length) return this.push(val); // insert at the last
    /////////////
    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.next = afterNode;
    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    this.length++;
    console.log("LL after INSERT OPERATION", this.head);
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false; // invalid index provided
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    /////////////
    var removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    console.log("Actual LL after REMOVE operation ", this.head);
    return removedNode;
  }
}

var LL = new DoublyLL();
LL.push(9);
LL.push(8);
//LL.push(7);
