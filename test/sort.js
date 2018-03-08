const assert = require('assert');
const {bubbleSort, quickSort} = require('../algorithms/sort/index.js');

let arr = [];
for(var i = 0; i < 10; i++){
	arr[i] = Math.floor(Math.random() * 100);
}
let sortedArr = arr.slice();
sortedArr.sort((a, b) => {
	return a - b;
});

describe('Sort', () => {
	describe('.bubbleSort()', () => {
		it(`should sort the array as [${sortedArr}].`, () => {
			assert.deepEqual(bubbleSort(arr.slice()), sortedArr);
		});
	});

	describe('.quickSort()', () => {
		it(`should sort the array as [${sortedArr}].`, () => {
			assert.deepEqual(bubbleSort(arr.slice()), sortedArr);
		});
	});
});
