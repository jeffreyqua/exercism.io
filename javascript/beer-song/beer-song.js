var Beer = {};

Beer.verse = function(num) {
	var str = '';
	if (num==0){
		str = "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
	}
	else {
		str = num+" bottle"+(num>1?'s':'')+" of beer on the wall, "+num+" bottle"+(num>1?'s':'')+" of beer.\nTake "+(num>1?'one':'it')+" down and pass it around, "+(num-1==0?'no more':(num-1))+" bottle"+(num-1!=1?'s':'')+" of beer on the wall.\n";
	}
	return str;
};

Beer.sing = function(start,end) {
	var end = end || 0;
	var str = '';
	for (var i=start; i>=end;i--) {
		//console.log(arguments[i]);
		str += Beer.verse(i) + (i!=end?"\n":'');
	}
	return str;
}
module.exports = Beer;