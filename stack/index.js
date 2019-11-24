var readline = require('readline-sync');
var Stack = require('./stack.js');
var isExit = false;

console.log('## STACK IMPLEMENTATION USING NODEJS ##');
var stack = new Stack();

do {
    let option = readline.question('Select from followwing operations \n1. Push\n2. Pop\n3. Peek \n4. Print Stack \n5. Exit\n>>> Enter your response : ');
    switch (option) {
        case '1':
            let pushValue = readline.question('Enter value : ');
            stack.push(pushValue);
            break;

        case '2':
            console.log(stack.pop());
            break;

        case '3':
            console.log(stack.peek());
            break;

        case '4':
            console.log(stack.printStack());
            break;

        case '5':
            isExit = true;
            break;

        default:
            console.log('Wrong input try again!');
            break;
    }
} while (!isExit);