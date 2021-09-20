import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
	let result = 0;
	let row = matrix.length;
	let column = matrix[0].length;
	for(let i=0; i<column; i++){
		for(let j=0; j<row; j++){
			let val = matrix[j][i];
			if(val==0){
				break;
			}
			result+=val;
		}
	}
	return result;
}
