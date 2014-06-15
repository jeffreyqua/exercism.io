var words = function(words) {
	var wordArray = words.replace(/\n/g, " ").split(" ");

	var wordCounts = {};

	for (var i=0;i<wordArray.length;i++) {
		var word = wordArray[i].replace( /[\.,-\/#?¿¡!$%\^&\*;:{}=\-_`~()@]/g, '').toLowerCase();
		if (word != '') {
			if (isNaN(wordCounts[word])) {
				wordCounts[word] = 0;
			}
			wordCounts[word] = wordCounts[word]+1;
		}
	}
	return wordCounts;
};
module.exports = words;