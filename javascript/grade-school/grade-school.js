var School = function() {
	var schoolRoster = [];

	var roster = function () {
		return schoolRoster;
	}
	var addStudent = function(name,grade) {
		schoolRoster = schoolRoster || [];
		schoolRoster[grade] = schoolRoster[grade] || [];
		schoolRoster[grade].push(name);

		schoolRoster[grade].sort();
	}
	var getStudentsinGrade = function(grade) {
		schoolRoster[grade] = schoolRoster[grade] || [];
		return schoolRoster[grade];
	}

	return {
		roster : roster,
		add : addStudent,
		grade: getStudentsinGrade
	}
};

module.exports = School;