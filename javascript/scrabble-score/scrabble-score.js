var score = function(word) {
	var score = 0;
	word = word || "";
	for (var i=0;i<word.length;i++) {
		var cmp = word[i].toUpperCase();
		if (cmp.match(/[aeioulnrst]/i)){
			score++;
		}
		else if (cmp.match(/[dg]/i)){
			score += 2;
		}
		else if (cmp.match(/[bcmp]/i)){
			score += 3;
		}
		else if (cmp.match(/[fhvwy]/i)){
			score += 4;
		}
		else if (cmp.match(/[k]/i)){
			score += 5;
		}
		else if (cmp.match(/[jx]/i)){
			score += 8;
		}
		else if (cmp.match(/[qz]/i)){
			score += 10;
		}
	}
	return score;
};

module.exports = score;