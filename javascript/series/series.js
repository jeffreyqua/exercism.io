var Series = function(seq) {
	var digits = serialize(seq);

	function serialize(str){
		var strArray = str.split('');
		for (var i=0; i<strArray.length; i++) {
			strArray[i] = Number(strArray[i]);
		}
		return strArray;
	}

	function slices(size) {
		if (size>digits.length) {
			throw Error('Slice size is too big.');
		}
		var slices = [];
		for (var i=0; i<digits.length+1-size; i++) {
			var digitsString = digits.join('');
			var digitsSub = digitsString.substr(i,size);

			var digitsSubArray = digitsSub.split('');
			for (var j=0;j<digitsSubArray.length;j++) {
				digitsSubArray[j] = parseInt(digitsSubArray[j]);
			}
			slices.push(digitsSubArray);
		}
		return slices;
	}

	return {
		digits: digits,
		slices: slices
	}
};

module.exports = Series;