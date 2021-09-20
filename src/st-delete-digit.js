import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
	let arr = (''+n).split('');
	let minVal = Math.min.apply(Math, arr);
	for(let i = 0; i<arr.length; i++){
		if(arr[i] == minVal){
			delete arr[i];
			break;
		}
	}
	return Number(arr.join(''));
}
