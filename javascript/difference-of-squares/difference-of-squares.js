var Squares = function(sqSize) {
	var squareOfSums = squareSums(sqSize);
	var sumOfSquares = sumSquares(sqSize);
	var difference = squareOfSums - sumOfSquares;
	
	return {
		squareOfSums: squareOfSums,
		sumOfSquares: sumOfSquares,
		difference: difference
	}

	// calculates square of sums from 0...max
	function squareSums(max) {
		var sum = 0;
		for (var i=0;i<=max;i++) {
			sum += i;
		}
		// SQUARE IT
		return sum*sum;
	}

	// calculates sum of squares from 0...max
	function sumSquares(max) {
		var sum = 0;
		for (var i=0;i<=max;i++) {
			sum += i*i;
		}
		return sum;
	}
};

module.exports = Squares;