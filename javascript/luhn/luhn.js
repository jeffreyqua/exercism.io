var Luhn = function(val) {
	var number = val;
	var checkDigit = val % 10;
	var addends = addendsParse(val);
	var checksum = checksumArray(addends);
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
	function checksumArray(arr) {
		return arr.reduce(function(a, b) {return a + b;});
	}
};

Luhn.create = function(num) {
	var luhnNum = new Luhn(num);

	if (!luhnNum.valid) {
		var addendsTempArr = num.toString().split('').reverse();
		var createsum = 0;
		for (var i=0;i<addendsTempArr.length;i++) {
			if (i%2==0) {
				var tempSum = parseInt(addendsTempArr[i]*2);
				if (tempSum > 9) {
					createsum += tempSum - 9;
				}
				else {
					createsum += tempSum;
				}
			}
			else {
				createsum += parseInt(addendsTempArr[i]);
			}
		}
		// calculate new check digit
		var newCheckDigit = (10 - createsum%10)%10;
  	}
  	return num * 10 + newCheckDigit;
};

module.exports = Luhn;