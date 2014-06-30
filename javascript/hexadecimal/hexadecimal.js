function Hexadecimal(hex) {
	this.hex = hex;
	this.toDecimal = function() {
		if (hex.match(/[^0-9A-F]/i)) {
			return 0;
		}
		return parseInt(hex,16);
	}
};

module.exports = Hexadecimal;