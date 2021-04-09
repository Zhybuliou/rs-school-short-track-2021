/* eslint-disable no-unused-vars */
/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = n.toString().split('');
  let count = 0;
  for (let i = 0; i < 2; i++) {
    const index = array.lastIndexOf(count.toString());
    if (index !== -1) {
      array.splice(index, 1);
      i = 2;
    } else {
      count += 1;
    }
  }
  return Number(array.join(''));
}
module.exports = deleteDigit;
