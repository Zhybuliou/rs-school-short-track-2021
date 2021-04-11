/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.i = [];
  }

  push(element) {
    this.i.push(element);
  }

  pop(element) {
    return this.i.pop(element);
  }

  peek() {
    return this.i[this.i.length - 1];
  }
}

module.exports = Stack;
