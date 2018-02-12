function countUniqueWords(words){
	let index = {};

	for(var i = 0; i<words.length; i++){
		if (!(index.hasOwnProperty(words[i]))) {
            index[words[i]] = 0;
        }
        index[words[i]]++;
	}
    return index;
}


const simplify = function (text) {
	if(arguments.length!==1||typeof text!== 'string'){
		throw "error in simplify, incorrect arguments";
	}else{
		let first_version = text.toLowerCase().replace(/[^\w\s]/gi, '').replace(/[0-9]/g, '');
		let final_version = first_version.replace(/\r?\n|\r|\r?\t|\r/g, ' ').replace(/ +(?= )/g,'').replace(/^\s+|\s+$/g, '');
		return final_version;
	}
}

const createMetrics = function (text) {
	if(arguments.length!==1||typeof text!== 'string'){
		throw "error in simplify, incorrect arguments";
	}else{
		let new_text = simplify(text);
		var rx = /[a-z]/gi;
		var numLetters = new_text.match(rx).length;
		let numWords = new_text.split(" ").length;
		let uniqueWordsBleh = Object.keys(countUniqueWords(new_text.split(" "))).length;
		let longWordsBleh = 0;

		new_text.split(" ").forEach(function (word){
			if(word.length >=6){
				longWordsBleh++;
			}
		});

		var avgWordLength;
		if(numWords!==0)
			avgWordLength = numLetters/numWords;
		else
			avgWordLength = 0;

		let dict = countUniqueWords(new_text.split(" "));

		return {totalLetters: numLetters, totalWords: numWords, uniqueWords: uniqueWordsBleh, longWords: longWordsBleh, averageWordLength: avgWordLength, wordOccurrences: dict};

	}
}


module.exports = {
    firstName: "Nicholas", 
    lastName: "Gattuso", 
    studentId: "10412769",
    simplify,
    createMetrics
};