var Trinary = function(val) {
	var trinaryArray = val.split("");
	var trinaryValue = calcDecimal();

	return {
		toDecimal: returnDecimal
	}
	function calcDecimal() {
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
	function returnDecimal() {
		return trinaryValue;
	}
}

module.exports = Trinary;