/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('');
  let count = 1;
  let i = 0;
  const result = [];
  while (array.length > i) {
    if (array[i] === array[i + 1]) {
      count += 1;
    } else {
      if (count === 1) { count = ''; }
      result.push(count + array[i]);
      count = 1;
    }
    i++;
  }
  return result.join('');
}

module.exports = encodeLine;
