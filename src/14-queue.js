/* eslint-disable max-classes-per-file */
// const Listqueue = require('../extensions/list-queue');
/**
 * Implement the Queue with a given interface via linked list (use Listqueue extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getLength() {
    return this.length;
  }

  enqueue(element) {
    this.queue = new ListNode();
    this.queue.value = element;
    if (this.head) {
      this.tail.next = this.queue;
      this.tail = this.queue;
    } else {
      this.head = this.queue;
      this.tail = this.queue;
    }
    this.length++;
  }

  dequeue() {
    const current = this.head;
    this.head = this.head.next;
    this.length--;
    return current.value;
  }
}

module.exports = Queue;
