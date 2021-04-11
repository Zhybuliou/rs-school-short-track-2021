/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const result = email.indexOf('@');
  const output = email.slice(result + 1, email.length);
  if (output.indexOf('@') === -1) {
    return output;
  }
  return getEmailDomain(output);
}

module.exports = getEmailDomain;
