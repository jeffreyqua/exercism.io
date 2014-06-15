var PhoneNumber = function(phoneNum) {
	var sequence = phoneNum.replace(/\D/g,'');

	if (sequence.length == 11 && sequence[0] == 1) {
		sequence = sequence.substr(1,sequence.length-1);
	}
	else if (sequence.length == 11 || sequence.length > 11 || sequence.length < 10) {
		sequence = '0000000000';
	}

	var number = function() {
		return sequence;
	}

	var areaCode = function() {
		return sequence.substr(0,3);
	}

	var toString = function() {
		return '('+areaCode() + ') ' + sequence.substr(3,3) + '-' + sequence.substr(6,sequence.length-6); 
	}
	return {
		number: number,
		areaCode: areaCode,
		toString: toString
	}
};

module.exports = PhoneNumber;