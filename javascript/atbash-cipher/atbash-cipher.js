var atbash = {};
atbash.encode = function(str) {
	var plain = 'abcdefghijklmnopqrstuvwxyz';
	var cipher = 'zyxwvutsrqponmlkjihgfedcba';
	var toEncode = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();

	var cipherString = '';

	for (var i=0;i<toEncode.length;i++) {
		if (toEncode[i].match(/\d/)) {
			var encodeChar = toEncode[i];
		}
		else {
			var key = plain.indexOf(toEncode[i]);
			var encodeChar = cipher[key];
		}
		cipherString += encodeChar;
	}
	// add spaces after every 5 characters
	var spacedCipherString = '';
	for (var j=0; j<cipherString.length; j+=5) {
		var temp = cipherString.slice(j,j+5);
		spacedCipherString += (j>0?' ':'')+ temp;
	}
	return spacedCipherString;
};
module.exports = atbash;