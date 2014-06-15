var song = {};

song.verse = function(verse_num) {
	var str = '';
	if (verse_num>=1 && verse_num<=7){
		if (verse_num == 1) {
			str = "I know an old lady who swallowed a fly.\n"
		}
		else if (verse_num==2) {
			str = "I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n";
		}
		else if (verse_num==3) {
			str = "I know an old lady who swallowed a bird.\n" + "How absurd to swallow a bird!\n"
		}
		else if (verse_num==4) {
			str = "I know an old lady who swallowed a cat.\n" + "Imagine that, to swallow a cat!\n";
		}
		else if (verse_num == 5) {
			str = "I know an old lady who swallowed a dog.\n" + "What a hog, to swallow a dog!\n";
		}
		else if (verse_num == 6) {
			str = "I know an old lady who swallowed a goat.\n" + "Just opened her throat and swallowed a goat!\n";
		}
		else if (verse_num == 7) {
			str = "I know an old lady who swallowed a cow.\n" +"I don't know how she swallowed a cow!\n";
		}
		str += song.swallowRecursion(verse_num-1);
	}
	else if (verse_num == 8) {
		str = "I know an old lady who swallowed a horse.\n" + "She's dead, of course!\n";
	}
	return str;
}

song.swallowRecursion = function(num) {
	var str='';
	if (num==0) {
		return "I don't know why she swallowed the fly. Perhaps she'll die.\n";
	}
	else if (num==1) {
		return "She swallowed the spider to catch the fly.\n"+song.swallowRecursion(num-1);
	}
	else if (num==2) {
		return "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n"+song.swallowRecursion(num-1);
	}
	else if (num==3) {
		return "She swallowed the cat to catch the bird.\n" +song.swallowRecursion(num-1);
	}
	else if (num==4) {
		return "She swallowed the dog to catch the cat.\n" +song.swallowRecursion(num-1);
	}
	else if (num==5) {
		return "She swallowed the goat to catch the dog.\n" +song.swallowRecursion(num-1);
	}
	else if (num==6) {
		return "She swallowed the cow to catch the goat.\n" +song.swallowRecursion(num-1);
	}
}

song.verses = function(start,end) {
	// todo: limit checks?
	var sum_str = '';
	for (var i=start; i<=end;i++) {
		//console.log(arguments[i]);
		sum_str += song.verse(i) + "\n";
	}
	return sum_str;
}

song.sing = function () {
	var whole_song = '';
	for (var i=1;i<=8;i++) {
		whole_song += song.verse(i) +"\n";
	}	
	return whole_song;
}
module.exports = song;