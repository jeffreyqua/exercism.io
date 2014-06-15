var Trinary = function(val) {
	var trinaryArray = val.split("");

	return {
		toDecimal: toDecimal
	}
	function toDecimal() {
		var trinaryValue = 0;
		var parseTrinaryArray = trinaryArray.reverse();
		for (var i=0; i<parseTrinaryArray.length; i++) {
			if (parseTrinaryArray[i] >= 0) {
				var thisValue = parseTrinaryArray[i] * Math.pow(3,i);
				trinaryValue += thisValue;
			}
		}
		return trinaryValue;
	}
}

module.exports = Trinary;