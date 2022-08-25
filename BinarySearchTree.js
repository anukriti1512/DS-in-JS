// Every parent node has atmost 2 children.
// Every node to the left of the parent node is always less than the parent.
// Every node to the right of the parent node is always greater than the parent.

///////////////////////
// READING VALUE FROM BST IN AN ORDER
// BFS - Breadth First Search -> it works across the tree first.
//DFS - Depth First Search -> it goes down vertically and then comes up.

// Below operations have been implemented ----
// INSERT
//FIND

// GRAPH TRAVERSAL TECHNIQUES ------
//BST
//DFS_preorder
// DFS_Inorder
//DFS_Postorder

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
        if (val === currentNode.value) return undefined;

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
    if (!found) {
      console.log("No Node found! with value", val);
      return false;
    }
    console.log("Found node", currentNode);
    return currentNode; // return found node
  }

  BFS() {
    var data = []; // for storing visited nodes i.e. at last we will return this array as a result
    var queueNodes = []; // to keep track of nodes for BFS traversel
    var node = this.root;
    console.log(node);
    queueNodes.push(node);
    while (queueNodes.length) {
      node = queueNodes.shift();
      data.push(node.value);
      if (node.left) queueNodes.push(node.left);
      if (node.right) queueNodes.push(node.right);
    }
    console.log("BFS", data);
    return data;
  }

  DFS_preOrder() {
    var data = []; // to track the order we are visiting the nodes
    var current = this.root;
    function Traverse(node) {
      data.push(node.value);
      if (node.left) Traverse(node.left);
      if (node.right) Traverse(node.right);
    }
    Traverse(current); // current = root
    console.log("PreOrder", data);
    return data;
  }

  DFS_inOrder() {
    var data = [];
    var current = this.root;
    function Traverse(node) {
      if (node.left) Traverse(node.left);
      data.push(node.value);
      if (node.right) Traverse(node.right);
    }
    Traverse(current); // root
    console.log("Inorder", data);
    return data;
  }

  DFS_postOrder() {
    var data = [];
    var current = this.root;
    function Traverse(node) {
      if (node.left) Traverse(node.left);
      if (node.right) Traverse(node.right);
      data.push(node.value);
    }
    Traverse(current);
    console.log("PostOrder", data);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.INSERT(10);
tree.INSERT(6);
tree.INSERT(15);
tree.INSERT(3);
tree.INSERT(8);
tree.INSERT(20);
console.log("BST created", tree);
tree.FIND(15);
tree.FIND(100);
tree.BFS();
tree.DFS_preOrder();
tree.DFS_inOrder();
tree.DFS_postOrder();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
