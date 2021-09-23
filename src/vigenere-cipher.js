import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
	
	direct;
	
	constructor(direct){
		this.direct = direct;
	}
	
	encrypt(message, key) {
		if (message == undefined || key == undefined){
			throw new Error('Incorrect arguments!');
		}
		message = message.toUpperCase();
		key = key.toUpperCase();
		
		let result = '';
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
		
		let keyNumber = 0;
		for(let i = 0; i<message.length; i++){
			if(alphabet.indexOf(message[i])>-1){
				let indexMessage = alphabet.indexOf(message[i]);
				let keyChar = (keyNumber >= key.length)?key[keyNumber%key.length]:key[keyNumber];
				let indexKey = alphabet.indexOf(keyChar);
				
				keyNumber++;
				result+= alphabet[(indexMessage+indexKey)%26];
			}
			else {
				result+= message[i];
			}
		}
		return (this.direct==null || this.direct) ? result: result.split('').reverse().join('');
	}
	
	decrypt(message, key) {
		if (message == undefined || key == undefined){
			throw new Error('Incorrect arguments!');
		}
		
		message = message.toUpperCase();
		key = key.toUpperCase();
		
		let result = '';
		const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
		
		let keyNumber = 0;
		for(let i = 0; i<message.length; i++){
			if(alphabet.indexOf(message[i])>-1){
				let indexMessage = alphabet.indexOf(message[i]);
				let keyChar = (keyNumber >= key.length)?key[keyNumber%key.length]:key[keyNumber];
				let indexKey = alphabet.indexOf(keyChar);
				
				keyNumber++;
				result+= alphabet[(indexMessage-indexKey+26)%26];
			}
			else {
				result+= message[i];
			}
		}
		return (this.direct==null || this.direct) ? result: result.split('').reverse().join('');
	}
}
