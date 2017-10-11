var arrayTasks = {



	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice( index, 0, itemToAdd );
		return arr;
	},

	square: function (arr) {
		var squared = arr.map( function (item) {
			return item *= item;
		});
		return squared;
	},

	sum: function (arr) {
		var total = 0;
		var total = arr.reduce(function (runningTotal, arrayNumber){
			return runningTotal += arrayNumber;
		}, 0);
		return total
	},

	findDuplicates: function (arr) {
		duplicateArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) !== pos;
		})
		uniqueArray = duplicateArray.filter(function (item, pos) {
			return duplicateArray.indexOf(item) == pos;
		})
		return uniqueArray;
	},

// 	findDuplicates: function (arr) {
//
//         var results = arr.filter(function(number, pos){
//             return number === arr[pos + 1] && number !== arr[pos-1];
//         })
//     return results;
// }

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter( function (number){
			return number !== valueToRemove;
		});
	},

	findIndexesOf: function (arr, itemToFind) {
		var foundArray = [];
		var arrayPosition = arr.indexOf(itemToFind);
		while (arrayPosition != -1) {
		  foundArray.push(arrayPosition);
		  arrayPosition = arr.indexOf(itemToFind, arrayPosition + 1);
		}
		return foundArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evenNumbers = arr.filter(function(number){
			 return number % 2 === 0;
	 })

	 var numbersSquared = evenNumbers.map(function(number) {
			 return number * number;
	 })

	 var sum = numbersSquared.reduce(function(sum, number){
			 return sum + number;
	 })

	 return sum;
	}

}

module.exports = arrayTasks
