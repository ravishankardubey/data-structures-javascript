class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {

    constructor() {
        this.PQueueList = [];
    }

    enqueue(element, priority) {
        let isPushed = false;
        let queueElement = new QueueElement(element, priority);

        for (let i = 0; i < this.PQueueList.length; i++) {
            if (queueElement['priority'] < this.PQueueList[i]['priority']) {
                this.PQueueList.splice(i, 0, queueElement);
                isPushed = true;
                break;
            }
        }

        if (!isPushed) {
            this.PQueueList.push(queueElement);
        }
    }

    dequeue() {
        if (this.PQueueList.length === 0) {
            return 'Underflow';
        }
        return JSON.stringify(this.PQueueList.shift());
    }

    front() {
        if (this.PQueueList.length === 0) {
            return 'Empty PQueue';
        }
        return JSON.stringify(this.PQueueList[0]);
    }

    rear() {
        if (this.PQueueList.length === 0) {
            return 'Empty PQueue';
        }
        return JSON.stringify(this.PQueueList[this.PQueueList.length - 1]);
    }

    printPQueue() {
        return JSON.stringify(this.PQueueList);
    }

}

module.exports = PriorityQueue;