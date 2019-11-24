var readline = require('readline-sync');
var Queue = require('./queue.js');
var isExit = false;
console.log('## QUEUE IMPLEMENTATION USING NODEJS ##');
var queue = new Queue();
do {
    let option = readline.question('Select from followwing operations \n1. Enqueue\n2. Dequeue\n3. Front \n4. Print Queue \n5. Exit\n>>> Enter your response : ');
    switch (option) {
        case '1':
            let enqueueValue = readline.question('Enter value : ');
            queue.enqueue(enqueueValue);
            break;

        case '2':
            console.log(queue.dequeue());
            break;

        case '3':
            console.log(queue.front());
            break;

        case '4':
            console.log(queue.printQueue());
            break;

        case '5':
            isExit = true;
            break;

        default:
            console.log('Wrong input try again!');
            break;
    }
} while (!isExit);