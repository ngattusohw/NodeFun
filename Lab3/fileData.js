const bluebird = require('bluebird');


var fs = bluebird.promisifyAll(require("fs"));


async function getFileAsString(path) {
    if(arguments.length!==1||typeof path!== 'string'){
        throw "getFileAsString failed on invalid input";
    }else{
        let the_promise = await fs.readFileAsync(path,"utf-8");

        return the_promise;
    }
}

async function getFileAsJSON(path) { 
    if(arguments.length!==1||typeof path!== 'string'){
        throw "getFileAsString failed on invalid input";
    }else{
        let the_promise = await fs.getFileAsString(path);

        return JSON.parse(the_promise);
    }
}

async function saveStringToFile(path,text) {
    if(arguments.length!==2||typeof path!== 'string'||typeof text!== 'string'){
        throw "saveStringToFile, error on the arguments";
    }else{
        await fs.writeFile(path,text,
            (err) => {
                if(err) throw err;
            });

        return true;
    }
}

async function saveJSONToFile(path,obj) {
    if(arguments.length!==2||typeof path!== 'string'||
        (obj1 && typeof obj1 === 'object' && obj1.constructor === Object)){
        throw "saveStringToFile, error on the arguments";
    }else{

        var the_json = JSON.stringify(obj);

        await fs.writeFile(path,the_json,
            (err) => {
                if(err) throw err;
            });

        return true;
    }
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