function DNA(seq) {
	var sequence = seq;
	var nucleotideCounts = { A : 0, T : 0, C : 0, G : 0 };

	
	var countNucleotide = function(nucleotide) {
		var valid = new RegExp('[ACGTU]');
		if (valid.test(nucleotide)) {
			return sequence.split(nucleotide).length-1;
		}
		else {
			throw(new Error("Invalid Nucleotide"));
		}
		//return 0;
	}

	nucleotideCounts['A'] = countNucleotide('A');
	nucleotideCounts['T'] = countNucleotide('T');
	nucleotideCounts['C'] = countNucleotide('C');
	nucleotideCounts['G'] = countNucleotide('G');
	//console.log(countNucleotide('G'));
	return {
		nucleotideCounts: nucleotideCounts,
		count: countNucleotide
	}
};

module.exports = DNA;