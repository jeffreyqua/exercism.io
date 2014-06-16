var Luhn = function(val) {
	var checkDigit = val % 10;
	var addends = addendsParse(val);
	var checksum = addends.reduce(function(a, b) {return a + b;});
	var valid = checksum%10==0;
	return {
		checkDigit: checkDigit,
		addends: addends,
		checksum: checksum,
		valid: valid
	}
	function addendsParse(val) {
		var addendsArray = val.toString().split('').reverse();
		for (var i=0; i<addendsArray.length; i++) {
			var addendsInt = Number(addendsArray[i]) * (i%2+1);
			if (addendsInt > 9) {
				addendsInt -= 9;
			}
			addendsArray[i] = addendsInt;
		}
		return addendsArray.reverse();
	}
	cal
};

module.exports = Luhn;