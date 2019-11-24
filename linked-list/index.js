var readline = require('readline-sync');
var LinkedList = require('./linked-list.js');
var isExit = false;
console.log('## LINKED LIST IMPLEMENTATION USING NODEJS ##');
var linkedList = new LinkedList();
let nodeValue, node, index;
do {
    let option = readline.question(` Select from followwing operations 
    \n 1. Insert Node
    \n 2. Insert Node at index
    \n 3. Remove Node from index
    \n 4. Remove node with value
    \n 5. Index of Value
    \n 6. Value at Index
    \n 7. Print List
    \n 8. Exit
    \n >>> Enter your response : `);

    switch (option) {
        case '1':
            nodeValue = readline.question('Enter value <Value> : ');
            console.log(linkedList.insertNode(nodeValue));
            break;

        case '2':
            node = readline.question('Enter value <Value Index> : ').split(" ");
            console.log(linkedList.insertNodeAt(node[0], node[1]));
            break;

        case '3':
            index = readline.question('Enter value <Index> : ');
            console.log(linkedList.removeFrom(index));
            break;

        case '4':
            nodeValue = readline.question('Enter value <Value> : ');
            console.log(linkedList.removeValue(nodeValue));
            break;

        case '5':
            nodeValue = readline.question('Enter value <Value> : ');
            console.log(linkedList.indexOf(nodeValue));
            break;

        case '6':
            index = readline.question('Enter value <Index> : ');
            console.log(linkedList.valueAtIndex(index));
            break;

        case '7':
            console.log(linkedList.printList());
            break;

        case '8':
            isExit = true;
            break;

        default:
            console.log(' Wrong input try again! ');
            break;
    }
} while (!isExit);