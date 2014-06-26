var pigLatin = {};

pigLatin.translate = function(word) {
	if (word.match(/\s/)) {
		var phraseArray = word.split(' ');

		var translated = ''
		for (var i=0; i<phraseArray.length; i++) {
			var translateWord = pigLatin.translate(phraseArray[i]);
			if (i>0) {
				translated += ' ';
			}
			translated += translateWord;
		}
		return translated;
	}

	// Starts with a vowel
	var start, wordBody;
	var firstLetter = word.charAt(0);
	var firstTwo = word.substr(0,2);
	var firstThree = word.substr(0,3);

	if (firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u') {
		return word + 'ay';
	}
	else {
		// TODO: if squ-

		if (firstThree == 'squ' || firstThree == 'thr' || firstThree == 'sch') {
			start = firstThree;
			wordBody = word.substr(3,word.length-3);
		}
		else if (firstTwo == 'ch' || firstTwo == 'qu' || firstTwo == 'th') {
			start = firstTwo;
			wordBody = word.substr(2,word.length-2);
		}

		else {
			start = firstLetter;
			wordBody = word.substr(1,word.length-1);
		}
		return wordBody+start+'ay';
		
	}
};

module.exports = pigLatin;