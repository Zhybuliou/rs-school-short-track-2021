/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const len = Math.floor(array.length - 1 / 2);
  const arrayCut = array;
  if (array[len] > value) {
    arrayCut.splice(len, array.length);
    return findIndex(arrayCut, value);
  }
  if (array[len] < value) {
    arrayCut.splice(0, len);
    return findIndex(arrayCut, value);
  }

  return len;
}
module.exports = findIndex;
