var Raindrops = function() {
	function convert(num) {
		var resp = '';

		if (num%3 != 0 && num%5 != 0 && num%7 != 0) {
			return num.toString();
		}
		if (num%3==0) {
			resp += "Pling";
		}
		if (num%5==0) {
			resp += "Plang";
		}
		if (num%7==0) {
			resp += "Plong";
		}
		return resp;
	}
	return {
		convert : convert
	}
};

module.exports = Raindrops;