var textMetrics = require('./textMetrics');
var fileData = require('./fileData');

const bluebird = require('bluebird');
var fs = bluebird.promisifyAll(require("fs"));

function try_catch(the_function_call){
	try{
		the_function_call();
	}catch(e){
		console.log(e);
	}
}

// function runTheStuff(chapterResultPath, chapterPath, chapterDebugPath){
// 	fileData.getFileAsString(chapterResultPath).then((result) => {
// 		console.log(result);
// 	}).catch((e) => {
// 		fileData.getFileAsString(chapterPath).then((result) => {
// 			fileData.saveStringToFile(chapterDebugPath,textMetrics.simplify(result)).then((errorCheck)=> {
// 				if(errorCheck){
// 					let the_text_metrics = textMetrics.createMetrics(result);
// 					fileData.saveJSONToFile(chapterResultPath,the_text_metrics).then((JSONerrorCheck) => {
// 						if(JSONerrorCheck){
// 							console.log(the_text_metrics);
// 						}else{
// 							console.log("There was an error saving into the result file!");
// 						}
// 					}).catch((e2) => {
// 						throw e2;
// 					}); //saveJSONToFile closing
// 				}else{
// 					console.log("There was a glitch in saving the debug file");
// 				}
// 			}).catch((e3) => {
// 				throw e3;
// 			}); //closing saveStringToFile
// 		}).catch((e4) => {
// 			throw e4;
// 		}); //closing getFileAsString
// 	});//close getFileAsString checking if file exists
// }

async function runTheStuff2(chapterResultPath, chapterPath, chapterDebugPath){
	try{
		let original_result = await fileData.getFileAsString(chapterResultPath);
		let chapterText = await fileData.getFileAsString(chapterPath);
		let check_if_debug_worked = await fileData.saveStringToFile(chapterDebugPath,textMetrics.simplify(chapterText));
		if(check_if_debug_worked){
			let the_text_metrics = textMetrics.createMetrics(chapterText);
			let check_if_result_worked = await fileData.saveJSONToFile(chapterResultPath,the_text_metrics);
			
			if(check_if_result_worked){
				console.log(the_text_metrics);
			}else{
				console.log("The file saving did not work!");
			}
		}else{
			console.log("The File saving did not work!");
		}
	}catch(e){
		throw e;
	}
}

runTheStuff2("chapter1.result.json", "chapter1.txt", "chapter1.debug.txt");
runTheStuff2("chapter2.result.json", "chapter2.txt", "chapter2.debug.txt");
runTheStuff2("chapter3.result.json", "chapter3.txt", "chapter3.debug.txt");







