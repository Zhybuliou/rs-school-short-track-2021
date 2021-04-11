/* eslint-disable no-param-reassign */
/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function removeKFromList(l, k) {
  while (l.value === k) {
    l = l.next;
  } // delate Head and don't destroy LinkedList
  let FirstNode = l; // Head start LinkedList
  let NextNode = FirstNode.next; // current Node;
  while (NextNode !== null) { // Check tail LinkedList
    if (NextNode.value === k) { // Check next node
      FirstNode.next = NextNode.next; // if remove link(hash) => delate node
    }
    if (FirstNode.next == null) break; // if next node tail break while.
    FirstNode = NextNode; // next step +1 node;
    NextNode = NextNode.next; // next step +1 node;
  }
  return l; // return result;
}

module.exports = removeKFromList;
