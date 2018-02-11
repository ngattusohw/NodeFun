const bluebird = require('bluebird');


var fs = bluebird.promisifyAll(require("fs"));


async function getFileAsString(path) {
    console.log("Fuck")

    let stuff = await fs.readFileAsync(path, "utf8").then(() => {
      console.log('resolved');
    }).catch((err) => {
      console.log('errored');
    });

    // let something = shit.catch(() => {
    //     console.log("I didnt fucking work!");
    // });

    // console.log("Woop" + something);
    return stuff;
}

async function getFileAsJSON(path) { 





}

async function saveStringToFile(path,text) {

}

async function saveJSONToFile(path,obj) {

}


function calls_request(your_request){

}


module.exports = {
    firstName: "Nicholas", 
    lastName: "Gattuso", 
    studentId: "10412769",
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
};