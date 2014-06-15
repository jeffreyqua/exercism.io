var Triangle = function(x,y,z) {
	var sides = [x, y, z];
	sides.sort();
	var a = sides[0];
	var b = sides[1];
	var c = sides[2];


	function kind() {
		if (a == 0 || b == 0 || c ==0 ) {
			throw Error('illegal');
		}
		// negatives sides and failing triangle inequality
		else if (a < 0 || b < 0 || c < 0 || !((a+b>c) && (b+a>c) && (a+c>b))) {
			return 'illegal';
		}
		else if (a == b && b==c) {
			return 'equilateral';
		}
		else if (a!=b && b!=c && a!=c) {
			return 'scalene';
		}
		else {
			return 'isosceles';
		}
	}
	return {
		kind: kind
	}
};
module.exports = Triangle;