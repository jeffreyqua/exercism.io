var SecretHandshake = function(code) {
	if (isNaN(code)) {
		throw(Error("Handshake must be a number"));
	}
	return {
		commands: commands
	}
	function commands() {
		var commands = [];
		var binaryCode = code.toString(2);

		for (var i=0; i<binaryCode.length; i++) {
			var currentIndex= binaryCode.length-1-i;
			if (i==0) {
				if (binaryCode[currentIndex]==1) {
					commands.push("wink");
				}
			}
			else if (i==1) {
				if (binaryCode[currentIndex]==1) {
					commands.push("double blink");
				}
			}
			else if (i==2) {
				if (binaryCode[currentIndex]==1) {
					commands.push("close your eyes");
				}
			}
			else if (i==3) {
				if (binaryCode[currentIndex]==1) {
					commands.push("jump");
				}
			}
			else if (i==4) {
				commands.reverse();
			}
		}
		return commands;
	}
};
module.exports = SecretHandshake;