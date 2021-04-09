/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrayR = arr;
  const second = arr;
  let count = 0;
  arrayR = arrayR.filter((el) => el > 0).sort((a, b) => a - b);
  for (let i = 0; second.length > i; i++) {
    if (second[i] > 0) {
      second[i] = arrayR[count];
      count++;
    }
  }
  return second;
}

module.exports = sortByHeight;
