var primeFactors = {};

primeFactors.for = function(num) {
	var primes = [];
	
	if (num <= 1 || num == Number.NaN) {
		return primes;
	}

	for (var i=2; i<=num; i++) {
		while (num%i == 0) {
			primes.push(i);
			num /= i;
		}
	}
	return primes;
}
module.exports = primeFactors;