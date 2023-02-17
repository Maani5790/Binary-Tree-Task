class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const node = new Node(value);
  
      if (!this.root) {
        this.root = node;
        return;
      }
  
      let current = this.root;
  
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            return;
          }
  
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            return;
          }
  
          current = current.right;
        }
      }
    }
  
    traverse(node, callback) {
      if (node) {
        this.traverse(node.left, callback);
        callback(node);
        this.traverse(node.right, callback);
      }
    }
  
    createTree() {
      const treeContainer = document.getElementById("tree");
  
      this.traverse(this.root, (node) => {
        const nodeElement = document.createElement("div");
        nodeElement.classList.add("node");
        nodeElement.innerText = node.value;
        treeContainer.appendChild(nodeElement);
  
        if (node.left) {
          const lineElement = document.createElement("div");
          lineElement.classList.add("line");
          treeContainer.appendChild(lineElement);
        }
  
        if (node.right) {
          const lineElement = document.createElement("div");
          lineElement.classList.add("line");
          treeContainer.appendChild(lineElement);
        }
      });
    }
  }
  
  const binaryTree = new BinaryTree();
  binaryTree.insert(5);
  binaryTree.insert(3);
  binaryTree.insert(7);
  binaryTree.insert
  