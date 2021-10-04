import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (!(date instanceof Date) || Object.prototype.toString.call(date) !== "[object Date]" || String(date) == new Date()) {
    throw new Error('Invalid date!')


  }
  let month = date.getMonth()

  let seasons = {
    0: 'winter',
    1: 'winter',
    11: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn',
  }
  return seasons[month]
}
