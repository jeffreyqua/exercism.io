var Cipher = function (new_key){
	var key = 'abcdefghijkl';
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';

	if (new_key!==undefined) {
		cipherKey(new_key);
	}
	
	return {
		encode: encode,
		decode: decode,
		key: key
	}
	function cipherKey(new_key) {
		if ( new_key == '') {
			throw(new Error("Bad key"));
			return;
		}
		else if ( new_key.match(/[A-Z]+/) || new_key.match(/\d+/)) {
			throw(new Error("Bad key"));
		}
		else if (new_key!=='') {
			key = new_key;
		}
	}
	function encode(plaintext) {
		var coded = '';
		for (var i=0; i<plaintext.length; i++) {
			var plainChar = plaintext[i];
			var keyChar = key[i%26];
			var plainIndex = alphabet.indexOf(plainChar);
			var keyIndex = alphabet.indexOf(keyChar);
			var encodedChar = alphabet[(plainIndex+keyIndex)%26];
			coded += encodedChar;
		}
		return coded;
	}
	function decode(ciphertext) {
		var decoded = '';
		for (var i=0; i<ciphertext.length; i++) {
			var cipherChar = ciphertext[i];
			var keyChar = alphabet[i%26];
			var cipherIndex = alphabet.indexOf(cipherChar);
			var keyIndex = alphabet.indexOf(keyChar);
			var decodedChar = alphabet[(26+cipherIndex-keyIndex)%26];
			decoded += decodedChar;
		}
		return decoded;
	}
}
module.exports = Cipher;