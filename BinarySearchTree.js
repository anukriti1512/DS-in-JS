// Every parent node has atmost 2 children.
// Every node to the left of the parent node is always less than the parent.
// Every node to the right of the parent node is always greater than the parent.

// Below operations have been implemented ----
// INSERT
//FIND

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  INSERT(val) {
    var newNode = new Node(val);
    // if NO node is present -> make root node
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var currentNode = this.root; // current node keeps track of the node currrently we are pointing to!

      while (true) {
        // if duplicate node is added
        if ((val = currentNode.value)) return undefined;

        // if Node value is less than the parent node ie. currentNode
        if (val < currentNode.value) {
          if (currentNode.left === null) {
            // if No node is present in the left node place then make as left node
            currentNode.left = newNode;
            return this;
          } else {
            // else traverse to the left nodes till we reach the appropriate place to insert the node
            currentNode = currentNode.left;
          }
        } // if node value is greater than the parent node i.e currentNode
        else if (val > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  FIND(val) {
    // if no nodes are present
    if (this.root === null) return undefined;
    var currentNode = this.root;
    var found = false;

    while (!found && currentNode) {
      if (val < currentNode.value) {
        currentNode = currentNode.left;
      } else if (val > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    // if node is not found
    if (!found) return false;
    return currentNode; // return found node
  }
}
