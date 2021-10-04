import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let result = ''
  members.map(name => {
    if (typeof name === 'string') {
      let cleanName = name.trim()
      result += cleanName[0]
    } else if (name instanceof Object) false
    else if (typeof name === 'array') false
    else false
  })
  return result.toLowerCase().split('').sort().join('').toUpperCase()
}
