class Queue {

    constructor() {
        this.queueList = [];
    }

    enqueue(item) {
        this.queueList.push(item);
    }

    dequeue() {
        if (this.queueList.length === 0) {
            return 'underflow';
        }
        return this.queueList.shift();
    }

    front() {
        if (this.queueList.length === 0) {
            return 'empty queue';
        }
        return this.queueList[0];
    }

    printQueue() {
        const tempQueue = Object.assign([], this.queueList);
        return tempQueue.join(" ");
    }

}

module.exports = Queue;