var Bob = function() {

	this.hey = hey;
};
module.exports = Bob;

function hey(data) {
	// Silence
	if (data.trim() == '') {
		return 'Fine. Be that way!';
	}
	// Shout
	else if (data.match(/[a-zA-Z]/g) && data.toUpperCase() == data) {
		return 'Woah, chill out!';
	}
	// Question
	else if (data.slice(-1)=='?'){
		return 'Sure.';
	}
	// Whatever
	else {
		return 'Whatever.';
	}
}