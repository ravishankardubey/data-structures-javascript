class Stack {

    constructor() {
        this.stackList = [];
    }

    push(item) {
        this.stackList.push(item)
    }

    pop() {
        if (this.stackList.length === 0) {
            return 'Underflow';
        }
        return this.stackList.pop();
    }

    peek() {
        if (this.stackList.length === 0) {
            return 'Underflow';
        }
        return this.stackList[this.stackList.length - 1];
    }

    printStack() {
        const tempStack = Object.assign([], this.stackList);
        return tempStack.join(" ");
    }

}

module.exports = Stack;