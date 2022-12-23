/**
 * how to implement a linked list in javascript
 * https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
 */

class ListNode {
    constructor(data) {
        this.data = data
    }
}

class LinkedList {

    constructor(head) {
        this.head = head
    }

    size() {
        let size = 0
        let temp = list.head
        while (temp instanceof ListNode) {
            size++
            temp = temp.next
        }
        return size
    }

    getFirst() {
        let first = list.head
        if (first instanceof ListNode)
        {
            return first
        }
    }

    getLast() {
        let temp =  list.head
        while (temp?.next instanceof ListNode) {
            temp = temp.next
        }
        return temp
    }

}

const node1 = new ListNode(3)
const node2 = new ListNode(6)
const node3 = new ListNode(9)

node2.next = node3
node1.next = node2

const list = new LinkedList(node1)

console.log("size", list.size())
console.log("first", list.getFirst())
console.log("last", list.getLast())