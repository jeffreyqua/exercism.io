var transform = function (old){
	var converted = {};

	for (var i in old) {
		//console.log(old[i]);
		for ( var j=0; j<old[i].length; j++ ){
			converted[old[i][j].toLowerCase()] = parseInt(i);
		}
	}
	return converted;
}

module.exports = transform;