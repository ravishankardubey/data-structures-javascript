class Node {
    constructor(nodeData) {
        this.value = nodeData;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertNode(value) {
        let node = new Node(value);
        let currentNode;

        if (this.head === null) {
            this.head = node;
        } else {
            currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.size++;
        return value;
    }

    insertNodeAt(value, index) {
        if (index > 0 && index > this.size) {
            return -1;
        } else {
            let node = new Node(value);
            let currentNode, previousNode, iterationCount = 0;
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                currentNode = this.head;
                iterationCount = 0;
                while (iterationCount < index) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                    iterationCount++;
                }
                node.next = currentNode;
                previousNode.next = node;
            }
        }
        this.size++;
        return value;
    }

    removeFrom(index) {
        let currentNode, previousNode, iterationCount = 0;
        if (index > 0 && index > this.size) {
            return -1;
        } else {
            currentNode = this.head;
            previousNode = currentNode;
            if (index === 0) {
                this.head = currentNode.next;
            } else {
                while (iterationCount < index) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                    iterationCount++;
                }
                previousNode.next = currentNode.next;
            }
        }
        this.size--;
        return currentNode.value;
    }

    removeValue(value) {
        let currentNode = this.head;
        let previousNode = null;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                if (previousNode === null) {
                    this.head = currentNode.next;
                } else {
                    previousNode.next = currentNode.next;
                }
                this.size--;
                return currentNode.value;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return -1;
    }

    indexOf(value) {
        let iterationCount = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return iterationCount;
            }
            iterationCount++;
            currentNode = currentNode.next;
        }
        return -1;
    }

    valueAtIndex(index) {
        let iterationCount = 0;
        let currentNode = this.head;
        if (index > 0 && index > this.size) {
            return -1;
        } else {
            while (iterationCount < index) {
                currentNode = currentNode.next;
                iterationCount++;
            }
            return currentNode.value;
        }
    }

    printList() {
        let currentNode = this.head;
        let str = '';

        while (currentNode) {
            str += ' ' + currentNode.value;
            currentNode = currentNode.next;
        }
        return str;
    }
}

module.exports = LinkedList;