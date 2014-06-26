var Triplet = function(a,b,c) {
	return {
		sum: sum,
		product: product,
		isPythagorean: isPythagorean
	}
	function sum() {
		return a+b+c;
	}
	function product() {
		return a*b*c;
	}
	function isPythagorean() {
		var triplet = [a, b, c];
		triplet.sort();

		return (a*a + b*b == c*c);
	}
};

Triplet.where = function(v) {
	var minFactor = v.minFactor || 0;
	var maxFactor = v.maxFactor;
	var sum = v.sum;

	var triplets = [];
	for (var i=minFactor;i<=maxFactor;i++) {
		for (var j=i+1;j<=maxFactor;j++) {
			for (var k=j+1;k<=maxFactor;k++) {
				if (i*i+j*j==k*k) {
					if (sum !== undefined && i+j+k==sum) {
						triplets.push(new Triplet(i,j,k));
					}
					else if (sum===undefined) {
						triplets.push(new Triplet(i,j,k));
					}
				}
			}
		}
	}
	return triplets;
}

module.exports = Triplet;