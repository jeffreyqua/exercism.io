var DNA = function(seq) {
	var sequence = seq;

	var hammingDistance = function(cmp) {
		var distance = 0;
		if (sequence!=cmp) {
			for (var i=0; i<Math.min(sequence.length,cmp.length); i++) {
				if (sequence[i]!=cmp[i]) {
					distance++;
				}
			}
		}
		return distance;
	}
	return {
		hammingDistance: hammingDistance
	}
};

module.exports = DNA;