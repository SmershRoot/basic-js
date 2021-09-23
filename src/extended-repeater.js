import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
	options.separator = options.separator==null?'+':options.separator;
	
	if(!options.repeatTimes){
		return str + options.addition;
	}
	
	let result = [];
	for(let i = 0; i< options.repeatTimes; i++){
		let subString = []
		for(let j = 0; j < (options.additionRepeatTimes==null?1:options.additionRepeatTimes); j++){
			if(options.addition !== undefined){
				subString.push(''+options.addition);
			}
		}
		result.push(str+subString.join(options.additionSeparator==null?'|':options.additionSeparator));
	}
	return result.join(options.separator==null?'+':options.separator);
}
