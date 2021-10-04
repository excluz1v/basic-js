import { NotImplementedError } from '../extensions/index.js';

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
export default function getEmailDomain(email) {
  if (email.includes('@')) {
    let arr = email.split('@')
    return arr[arr.length - 1]

  } else {
    let arr = email.split('.')
    return arr[arr.length - 2] + '.' + arr[arr.length - 1]
  }

}
