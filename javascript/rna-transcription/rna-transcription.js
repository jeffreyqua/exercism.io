var toRna = function(str) {
	var rna = [];
	for (var i = 0; i<str.length; i++) {
		switch(str[i]) {
			case 'C':
				rna[i] = 'G';
				break;
			case 'G':
				rna[i] = 'C';
				break;
			case 'A':
				rna[i] = 'U';
				break;
			case 'T':
				rna[i] = 'A';
				break;
		}
	}
	return rna.join("");
};
module.exports = toRna;