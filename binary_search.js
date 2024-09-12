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

  // isEmpty
  isEmpty() {
    return this.root === null;
  }

  insertValue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertTreeNode(this.root, node);
    }
  }

  insertTreeNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertTreeNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertTreeNode(root.right, node);
      }
    }
  }

  search(root, value) {
    if (!this.root) {
      return console.log("Tree is empty");
    }
    if (value === root.value) {
      return true;
    } else if (root.value > value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrderSearch(root) {
    if (root) {
      console.log(root.value);
      this.preOrderSearch(root.left);
      this.preOrderSearch(root.right);
    }
  }
}
const bst = new BinarySearchTree();
bst.insertValue(10);
bst.insertValue(3);
bst.insertValue(7);
// bst.insertTreeNode(3);
// bst.insertTreeNode(7);
bst.preOrderSearch(this.root);
// console.log(bst.search(this.root, 7));
