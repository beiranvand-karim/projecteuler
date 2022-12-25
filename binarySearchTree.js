class BinarySearchTreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(node) {
        this.root = node
    }

    insert(node) {
        let god = this.root

        while (true) {
            if (node.data < god.data) {
                if (god.left instanceof BinarySearchTreeNode) {
                    god = god.left
                    continue
                }
                if (god.left === null) {
                    god.left = node
                    break
                }
            }
            if (node.data === god.data) {
                break
            }
            if (node.data > god.data) {
                if (god.right instanceof BinarySearchTreeNode) {
                    god = god.right
                    continue
                }
                if (god.right === null) {
                    god.right = node
                    break
                }
            }
        }
    }
}

const rootNode = new BinarySearchTreeNode(12)
const bst = new BinarySearchTree(rootNode)

bst.insert(new BinarySearchTreeNode(15))
bst.insert(new BinarySearchTreeNode(16))
bst.insert(new BinarySearchTreeNode(12))
bst.insert(new BinarySearchTreeNode(10))

console.log("bst", bst)
