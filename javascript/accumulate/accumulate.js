var accumulator = function(arr, func) {
	var mapped = [];

	for (var i=0; i<arr.length; i++) {
		mapped[i] = func(arr[i]);
	}
	return mapped;
}

module.exports = accumulator;