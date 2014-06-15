var Allergies = function(num) {
	var allergyList = [];
	var allergyDef = {
		1: 'eggs',
		2: 'peanuts',
		4: 'shellfish',
		8: 'strawberries',
		16: 'tomatoes',
		32: 'chocolate',
		64: 'pollen',
		128: 'cats'
	};
	addAllergies(num);

	return {
		list: list,
		allergicTo: allergicTo
	}
	
	function addAllergies(num) {
		var binaryCode = num.toString(2);
		var revBinaryCode = binaryCode.split('').reverse();

		for (var i=0; i<revBinaryCode.length; i++) {
			var currentFactor = Math.pow(2,i);

			if (revBinaryCode[i] == 1 && allergyDef[currentFactor] !== undefined) {
				allergyList.push(allergyDef[currentFactor]);
			}
		}
	}
	function list() {
		return allergyList;
	}
	function allergicTo(needle) {
		return allergyList.indexOf(needle)>=0;
	}
};

module.exports = Allergies;