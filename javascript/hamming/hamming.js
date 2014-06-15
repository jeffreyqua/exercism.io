var hamming = {};

hamming.compute = function(s1,s2) {
	var dif = 0;

	// check for shortest length
	var limit = Math.min(s1.length,s2.length);

	for (var i=0;i<limit;i++) {
		if (s1[i]!=s2[i]) {
			dif++;
		}
	}
	
	return dif;
};

module.exports = hamming;