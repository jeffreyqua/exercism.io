function Garden(diagram, students) {
	var defaultStudents = ['Alice', 'Bob', 'Charlie', 'David', 'Eve','Fred','Ginny', 'Harriet','Ileana','Joseph','Kincaid','Larry'];
	var plants = {
	  G: 'grass',
	  V: 'violets',
	  R: 'radishes',
	  C: 'clover'
	};

	var gardenArray = diagram.split(/[\r?\n]+/g);
	var students = students || defaultStudents;
	students.sort();
	
	var instance = {};

	students.forEach(function(student, index){
		var currentStudent = student.toLowerCase();
		instance[currentStudent] = getPlants(currentStudent, index);
	});

	return instance;

	function getPlants(child, index) {
		var start = index * 2;
		var plants = [];
		var front_row = gardenArray[0];
		var back_row = gardenArray[1];

		for (i=start;i<start+2;i++) {
			plants.push(front_row[i]);
		}
		for (i=start;i<start+2;i++) {
			plants.push(back_row[i]);
		}
		return plants.map(translatePlant);
	}


	function translatePlant(code) {
		return plants[code];
	}
}

module.exports = Garden;