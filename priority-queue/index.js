var readline = require('readline-sync');
var PriorityQueue = require('./priority-queue');
var isExit = false;
console.log('## PRIORITY QUEUE IMPLEMENTATION USING NODEJS ##');
var priorityQueue = new PriorityQueue();
do {
    let option = readline.question('Select from followwing operations \n1. Enqueue <element priority>\n2. Dequeue\n3. Front \n4. Rear \n5. Print Queue \n6. Exit\n>>> Enter your response : ');
    switch (option) {
        case '1':
            let enqueueValue = readline.question('Enter value : ');
            const splittedVal = enqueueValue.split(" ");
            priorityQueue.enqueue(splittedVal[0], splittedVal[1]);
            break;

        case '2':
            console.log(priorityQueue.dequeue());
            break;

        case '3':
            console.log(priorityQueue.front());
            break;

        case '4':
            console.log(priorityQueue.rear());
            break;

        case '5':
            console.log(priorityQueue.printPQueue());
            break;

        case '6':
            isExit = true;
            break;

        default:
            console.log('Wrong input try again!');
            break;
    }
} while (!isExit);