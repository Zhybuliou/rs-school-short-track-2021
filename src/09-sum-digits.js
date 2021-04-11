/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
// eslint-disable-next-line consistent-return
function getSumOfDigits(n) {
  const first = n.toString().split('');
  const second = first.reduce((sum, el) => Number(sum) + Number(el));
  if (second >= 10) {
    return getSumOfDigits(second);
  }
  return second;
}

module.exports = getSumOfDigits;
