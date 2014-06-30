function Series(num) {
	this.digits = num.split('').map(Number);
	
	this.slices = function(size) {
		if (size>num.length) {
			throw Error('Slice size is too big.');
		}
		var slices = [];
		for (var i=0; i<num.length+1-size; i++) {
			var digitsSub = num.substr(i,size);

			var digitsSubArray = digitsSub.split('').map(Number);
			slices.push(digitsSubArray);
		}
		return slices;
	}

	this.largestProduct = function(size) {
		var slices = this.slices(size);
		var products = [];
		for(var i=0;i<slices.length;i++) {
			var product = 1;
			for(var j=0;j<slices[i].length;j++) {
				product *= slices[i][j];
			}
			products.push(product);
		}
		//console.log(products);
		return Math.max.apply(Math,products);
	}
}
module.exports = Series;