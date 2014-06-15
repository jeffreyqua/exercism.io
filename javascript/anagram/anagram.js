var anagram = function(word) {
	this.word = word;
	// prepare for comparison / alphabetized
	this.alpha = word.toLowerCase().split("").sort().join("");
	return {
		matches: matches
	}

	function matches(arr){
		var matches = [];

		// it's strings!
		if (arguments.length>1) {
			var new_arr = [];
			for (var a=0;a<arguments.length;a++) {
				new_arr.push(arguments[a]);
			}
			// Make the strings into an array of strings
			arr = new_arr;
		}

		for (var i=0;i<arr.length;i++) {
			// alphabetized
			var compare_str = arr[i].toLowerCase().split("").sort().join("");
			if (alpha==compare_str) {
				// make sure not same word
				if (word.toLowerCase()!= arr[i].toLowerCase()){
					matches.push(arr[i]);
				}
			}
		}
		return matches;
	}
}

module.exports = anagram;