var strain = {};

strain.keep = function(arr, func) {
	var filtered  = [];

	for (var i=0; i<arr.length; i++) {
		if (func(arr[i])) {
			filtered.push(arr[i]);
		}
	}
	return filtered;
}

strain.discard = function(arr, func) {
	var filtered  = [];

	for (var i=0; i<arr.length; i++) {
		if (!func(arr[i])) {
			filtered.push(arr[i]);
		}
	}
	return filtered;
}
module.exports = strain;