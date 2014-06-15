var Robot = function() {
	// generate name
	var name = generateName();
	
	function randIntChar() {
	  return Math.floor((Math.random() * 9));
	}
	function randAZChar() {
		var abc = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
		return abc[Math.floor((Math.random() * 25))];
	}

	function generateName() {
		return randAZChar()+randAZChar()+randIntChar()+randIntChar()+randIntChar();
	}
	// resets the name
	function reset() {
		this.name = generateName();
	}

	return {
		name : name,
		reset : reset
	}
};


module.exports = Robot;