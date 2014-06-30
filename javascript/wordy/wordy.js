var Wordy = {};

Wordy.WordProblem = function(q) {
	var answer = 0;
	// Parse string
	if (q.indexOf("What is ") == 0 && q.indexOf('?')==q.length-1) {
		// No problem!
		var parsed_q = q.substr(8, q.length-8-1);
	}

	// Traverse through and convert the operations into symbols
	parsed_q = parsed_q.replace(/plus/g,'+');
	parsed_q = parsed_q.replace(/minus/g,'-');
	parsed_q = parsed_q.replace(/multiplied by/g,'*');
	parsed_q = parsed_q.replace(/divided by/g,'/');
	
	//console.log(parsed_q);

	//answer = eval(parsed_q);

	var wordArguments = parsed_q.split(' ');
	var subTotal = 0;

	//console.log(wordArguments);
	var arg1 = parseInt(wordArguments[0]);
	var arg2 = parseInt(wordArguments[2]);
	var arg3 = parseInt(wordArguments[4]);

	var func1 = wordArguments[1];
	var func2 = wordArguments[3];

	if (wordArguments[2] == undefined) {
		// THROW ERROR
		console.log('ERRORS');
		throw(Wordy.ArgumentError());
	}

	if (func1=='+') {
		subTotal = arg1 + arg2;
	}
	else if (func1=='-') {
		subTotal = arg1 - arg2;
	}
	else if (func1=='*') {
		subTotal = arg1 * arg2;
	}
	else if (func1=='/') {
		subTotal = arg1 / arg2;
	}

	// if additional arguments
	if (func2 != undefined && wordArguments[4] != undefined) {
		if (func2=='+') {
			subTotal = subTotal + arg3;
		}
		else if (func2=='-') {
			subTotal = subTotal - arg3;
		}
		else if (func2=='*') {
			subTotal = subTotal * arg3;
		}
		else if (func2=='/') {
			subTotal = subTotal / arg3;
		}
	}


	answer = subTotal;

	return {
		answer: returnAnswer
	}
	function returnAnswer() {
		return answer;
	}
	function tooAdvanced(arr) {
		return arr.matches === null;
	}
};
Wordy.ArgumentError = function() {
	//return new Error();
	throw("Too advanced");
};

module.exports = Wordy;