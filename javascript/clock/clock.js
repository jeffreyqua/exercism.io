exports.at = at;

function at(hours, minutes) {
	minutes = minutes || 0;
	var m = minutes;
	var h = hours;
	var timeInMinutes = hours * 60 + minutes;

 	var clock = {};

	clock.plus = function(minutesToAdd) {
		//h = Math.floor((h + Math.floor((m + minutesToAdd)/60))%24);
		//m = Math.floor((m + minutesToAdd)%60);
		timeInMinutes += minutesToAdd;
		timeInMinutes %= 1440;
	
		return clock;
	};

	clock.minus = function(minutesToSub) {
		timeInMinutes = (1440 + timeInMinutes - minutesToSub)%1440;
		return clock;
	};


	clock.toString = function () {
		var min = Math.floor(timeInMinutes%60/10).toString() + Math.floor(timeInMinutes%60%10).toString();
		var hr = Math.floor(timeInMinutes/60/10).toString() + Math.floor(timeInMinutes/60%10).toString();
		//var time = new Date(value).toISOString().split('T')[1].split(':');
		return hr + ":" + min;
	};

	clock.equals = function (clock2) {
		return clock.toString() == clock2.toString();
	}
	return Object.create(clock);
};