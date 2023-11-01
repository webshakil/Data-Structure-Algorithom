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

    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    printTree() {
        function printNode(node, prefix = '', isLeft = false) {
            if (node !== null) {
                const nodeType = isLeft ? 'L' : 'R';
                console.log(`${prefix}${isLeft ? '├' : '└'}── ${nodeType}:${node.value}`);
                printNode(node.left, `${prefix}${isLeft ? '│   ' : '    '}`, true);
                printNode(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
            }
        }
        
        if (this.root) {
            console.log('Root');
            printNode(this.root, '', false);
        }
    }
}
//      10
//   5     13
// 2  7  11  16

// Create and populate the binary search tree
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(3);
tree.insert(18);
tree.insert(4);

// Use the printTree method to print the tree in a tree-like format
tree.printTree();

