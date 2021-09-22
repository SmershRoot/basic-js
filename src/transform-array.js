import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
	let result = [];
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!")
	}
	let prev = null;
	let dubleNext = false;
	let deleteNext = false;
	for(let i = 0; i< arr.length; i++){
		if(arr[i]=='--discard-prev'){
			if(prev != null){
				result.pop();
			}
			prev = null;
			continue;
		}
        if(arr[i]=='--double-prev'){
			if(prev != null){
				result.push(prev);
			}
            continue;
        }
        if(arr[i]=='--discard-next'){
			deleteNext = true;
			prev = null;
			continue;
        }
		if(arr[i]=='--double-next'){
			dubleNext = true;
			continue;
        }
		if(!typeof arr[i] == 'number'){
			throw Error("'arr' parameter must be an instance of the Array!");
		}
		
		if(deleteNext){
			deleteNext = false;
			prev = null;
			continue;
		}
		result.push(arr[i]);
		if(dubleNext){
			dubleNext = false;
			result.push(arr[i]);
		}
		prev = arr[i];
    }
	return result;
}
