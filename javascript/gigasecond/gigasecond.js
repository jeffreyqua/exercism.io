var Gigasecond = function(o_date) {
	var originDate = o_date.getTime();

	function date() {
		var newDate = new Date(originDate+1000000000000);
		newDate.setHours(0,0,0,0); // set to midnight
		return newDate;
	}
	return {
		date: date
	}
};

module.exports = Gigasecond;