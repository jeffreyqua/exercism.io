var toRoman = function(num) {
	var str = '';
	if (num == 0) {
		str = 'N';
	}
	else {
		// check the 1000s
		var thousands = Math.floor(num / 1000);
		var hundreds = Math.floor(num % 1000 / 100);
		var tens = Math.floor(num % 100 / 10);
		var ones = Math.floor(num % 10);
		//console.log(thousands +'/' +hundreds +'/' +tens +'/' +ones);

		if (thousands) {
			for (var i = thousands; i > 0; i--) {
				str += 'M';
			}
		}
		if (hundreds) {
			var i = hundreds;
			if (i==9) {
				str += 'CM';
				i=0;
			}

			else if (i==4) {
				str += 'CD';
				i=0;
			}
			else if (i>=5) {
				str+='D';
				i -= 5;
			}

			for (i=i;i>0;i--) {
				str+='C';
			}
		}
		if (tens) {
			var i = tens;
			if (i==9) {
				str += 'XC';
				i=0;
			}
			else if (i==4) {
				str += 'XL';
				i=0;
			}
			else if (i>=5) {
				str+='L';
				i -= 5;
			}

			for (i=i;i>0;i--) {
				str+='X';
			}
		}


		if (ones) {
			var i = ones;
			if (i==9) {
				str += 'IX';
				i=0;
			}
			else if (i==4) {
				str += 'IV';
				i=0;
			}

			else if (i>=5) {
				str+='V';
				i -= 5;
			}

			for (i=i;i>0;i--) {
				str+='I';
			}
		}
	}
	return str;
};
module.exports = toRoman;