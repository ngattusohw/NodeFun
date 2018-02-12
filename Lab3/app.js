// const bluebird = require("bluebird");
// const Promise = bluebird.Promise;

// // We use bluebird to make a copy of fs
// // that has all its normal methods, and
// // {methodName}Async method versions that return
// // promises as well; ie, you will have a copy
// // of fs with fs.stat(path, callback) and
// // fs.statAsync(path), which returns a promise
// // thus allowing us to await it.
// const fs = bluebird.promisifyAll(require("fs"));

// async function getFileSizeInKilobytes(path) {
//   // Throwing inside of an async method causes the method
//   // To return a rejected promise, which means we can throw based
//   // On arguments
//   if (!path) throw "You must provide a path";
//   const stats = await fs.statAsync(path);

//   return stats.size / 1024;
// }

// async function main() {
//     // We can await this; if it throws / rejects
//   const kilos = await getFileSizeInKilobytes("./hello.txt");
//   console.log(`That file is ${kilos}kb large!`);
// }

// main();
// 
// var fileData = require('./fileData.js');
// const file = './chapter1]0.txt';

var shit = require('./textMetrics.js');
console.log(shit.simplify("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23"));
console.log(shit.createMetrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23"));
// console.log("AKSDOPKASD");


// fileData.getFileAsString(file);


// let text = "        Hello my name is bill123y \n bob and\t%saodd phil      and     ass      ";

// let hello = text.toLowerCase().replace(/[^\w\s]/gi, '').replace(/[0-9]/g, '');
// let shit = hello.replace(/\r?\n|\r|\r?\t|\r/g, ' ').replace(/ +(?= )/g,'').replace(/^\s+|\s+$/g, '');;

// console.log(shit);


