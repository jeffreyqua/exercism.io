var Binary = function(val) {
	var binaryArray = val.split("");
	var binaryValue = calcDecimal();

	return {
		toDecimal: returnDecimal
	}
	function calcDecimal() {
		var binaryValue = 0;
		var parseBinaryArray = binaryArray.reverse();
		for (var i=0; i<parseBinaryArray.length; i++) {
			if (parseBinaryArray[i] == 1) {
				var thisValue = Math.pow(2,i);
				binaryValue += thisValue;
			}
		}
		return binaryValue;
	}
	function returnDecimal() {
		return binaryValue;
	}
}

module.exports = Binary;