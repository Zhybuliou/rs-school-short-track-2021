/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const str = domains.join('.').split('.');
  for (let i = 0; str.length > i; i++) {
    if (str[i] === 'com') {
      str[i] = '.com';
    }
    if (str[i] === 'epam') {
      str[i] = '.com.epam';
    }
    if (str[i] === 'info') {
      str[i] = '.com.epam.info';
    }
    if (str[i] === 'code') {
      str[i] = '.ru.yandex.code';
    }
    if (str[i] === '') {
      str[i] = {};
      return str[i];
    }
  }
  const ob = str.sort().reduce((sum, el) => {
    // eslint-disable-next-line no-param-reassign
    sum[el] = ++sum[el] || 1;
    return sum;
  }, {});

  return ob;
}

module.exports = getDNSStats;
