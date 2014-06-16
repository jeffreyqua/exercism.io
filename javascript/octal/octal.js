var Octal = function(val) {
	var octalArray = val.split("");

	return {
		toDecimal: toDecimal
	}
	function toDecimal() {
		var octalValue = 0;
		var parseOctalArray = octalArray.reverse();
		for (var i=0; i<parseOctalArray.length; i++) {
			octalValue += parseOctalArray[i] * Math.pow(8,i);
		}
		if (isNaN(octalValue)) {
			octalValue = 0;
		}
		return octalValue;
	}
}

module.exports = Octal;