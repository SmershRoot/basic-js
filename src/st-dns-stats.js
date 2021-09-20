import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
	let result = {};
	for(let i = 0; i< domains.length; i++){
		let arr = domains[i].split('.').reverse()
		for (let j = 0; j < arr.length; j++) {
			let key = '.' + arr.slice(0, j + 1).join('.')
			if (result[key])
				result[key]++
			else
				result[key] = 1
		}
	}
  return result
}
