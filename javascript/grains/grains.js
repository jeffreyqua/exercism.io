var Grains = function() {
	function square(x){
		var square = Math.pow(2,x-1);
		return square;
	}
	function total() {
		var sum = 0;
		for (var i=1; i<=64; i++) {
			sum += square(i);
		}
		return sum;
	}
	return {
		square: square,
		total: total
	}
};

module.exports = Grains;