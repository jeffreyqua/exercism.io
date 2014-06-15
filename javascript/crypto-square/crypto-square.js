var Crypto = function(str) {
	var plaintext = normalizePlaintext(str);
	var col_size = size();
	var ciphertextString = ciphertext();

	return  {
		normalizePlaintext: normalizePlaintext,
		size: size,
		plaintextSegments: plaintextSegments,
		ciphertext: ciphertext,
		normalizeCiphertext: normalizeCiphertext
	}
	function normalizePlaintext() {
		return str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
	}
	function size() {
		return Math.ceil(Math.sqrt(plaintext.length));
	}
	function plaintextSegments() {
		var plainTextSegments = [];
		for (var i=0; i<plaintext.length/col_size; i++) {
			plainTextSegments.push(plaintext.substr(i*col_size,col_size));
		}
		return plainTextSegments;
	}
	function ciphertext() {
		plainTextSegments = plaintextSegments();
		var ciphertextString = ''
		for (var i=0; i<col_size; i++) {
			for (var j=0; j<col_size; j++) {
				if (plainTextSegments[j] !== undefined && plainTextSegments[j][i] !== undefined) {
				ciphertextString += plainTextSegments[j][i];
				}
			}
		}
		return ciphertextString;
	}
	function ciphertextSegments() {
		var cipherTextSegments = [];
		for (var i=0; i<ciphertextString.length/col_size; i++) {
			cipherTextSegments.push(ciphertextString.substr(i*col_size,col_size));
		}
		return cipherTextSegments;
	}
	function normalizeCiphertext() {
		return encodeText(ciphertextString);
	}
	function encodeText(str) {
		encodedStr = '';
		for (var i=0; i<str.length; i++) {
			if (i%5==0 && i>0) {
				encodedStr += ' ';
			}
			encodedStr += str[i];
		}
		return encodedStr;
	}
};

module.exports = Crypto;