var Sieve = function(num) {
	var primeValues = [];
	var primes = [];

	// generate default
	for (var i=0;i<num;i++) {
		primeValues[i]=true;
	}

	// calculate the primes up to the sqrt
	for (var i=2;i<=Math.floor(Math.sqrt(num));i++) {
		// remove factors
		for (var j=i*2; j<num; j+=i) {
			//console.log('j'+j+'false');
			primeValues[j] = false;
		}
	}
	for (var i=2;i<=num;i++) {
		if (primeValues[i]) {
			primes.push(i);
		}
	}
	// generate the prime values array
	return {
		primes: primes
	};
};
module.exports = Sieve;