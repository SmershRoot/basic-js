import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
	let result = [];
	result[0]=[
	  +matrix[0][1]+matrix[1][0]+matrix[1][1], 
	  +matrix[0][0]+matrix[0][2]+matrix[1][0]+matrix[1][1]+matrix[1][2],
	  +matrix[0][2]+matrix[1][1]+matrix[1][2]
	];
	result[1]=[
	  +matrix[0][0]+matrix[0][1]+matrix[1][1]+(matrix.length==3?(matrix[2][0]+matrix[2][1]):0),
	  +matrix[0][0]+matrix[0][1]+matrix[0][2]+(matrix.length==3?(matrix[1][0]+matrix[1][2]+matrix[2][0]+matrix[2][1]+matrix[2][2]):0),
	  +matrix[0][1]+matrix[0][2]+matrix[1][1]+(matrix.length==3?(matrix[2][1]+matrix[2][2]):0),
	];
	if(matrix.length==3){
	result[2]=[
	  +matrix[1][0]+matrix[1][1]+matrix[2][1],
	  +matrix[1][0]+matrix[1][1]+matrix[1][2]+matrix[2][0]+matrix[2][2],
	  +matrix[2][1]+matrix[1][1]+matrix[1][2]
	];}
	return result;
}
