var Binary = function(val) {
	var binaryArray = val.split("");

	return {
		toDecimal: toDecimal
	}
	function toDecimal() {
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
}

module.exports = Binary;