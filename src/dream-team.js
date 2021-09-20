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
  if(!(Array.isArray(members)) || members.length==0){
		return false;
	}
	
  let result = '';
  
  members
    .filter((member) => {return typeof member == 'string'})
    .map((member) => {return member.replace(/\s+/g, '').toUpperCase()[0];})
	.sort().forEach((member) => {
		result+=member;
  });
  return result.length==0?false:result;
}
