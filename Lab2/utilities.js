const deepEquality = function deepEquality(obj1,obj2) {
    // Implement question 1 here
    if(arguments.length===2){
        if((obj1 && typeof obj1 === 'object' && obj1.constructor === Object) &&
           (obj2 && typeof obj2 === 'object' && obj2.constructor === Object)){

            var aProps = Object.getOwnPropertyNames(obj1);
            var bProps = Object.getOwnPropertyNames(obj2);

            // If number of properties is different,
            // objects are not equivalent
            if (aProps.length != bProps.length) {
                return false;
            }

            for (var i = 0; i < aProps.length; i++) {
                var propName = aProps[i];
                if (obj1[propName] !== obj2[propName]) {
                    return false;
                }
            }

            return true;
        }else{
            throw "One or more arguments is not a object";
        }
    }else{
        throw "Incorrect amount of arguments -- 2 argument of type object needed";
    }
}

const uniqueElements = function uniqueElements(arr) { 
    // Implement question 2 here
    if(arguments.length===1){
        if((arr && typeof arr === 'object' && arr.constructor === Array)){
            return arr.filter((v, i, a) => a.indexOf(v) === i).length; 
        }else{
            throw "One or more arguments is not an array";
        }
    }else{
        throw "Incorrect amount of arguments -- 1 argument of type array needed";
    }

}

const countOfEachCharacterInString = function countOfEachCharacterInString(str) {
    // Implement question 3 here
    if(arguments.length===1){
        if(typeof str === 'string' || str instanceof String){
            var the_object = { };
            for (var i = 0; i < str.length; i++) {
                if(str[i] in the_object){
                    the_object[str[i]]++;
                }else{
                    the_object[str[i]] = 1;
                }
            }
            return the_object;
        }else{
            throw "One or more arguments is not a string";
        }
    }else{
        throw "Incorrect amount of arguments -- 1 argument of type string needed";
    }
}


module.exports = {
    firstName: "Nicholas", 
    lastName: "Gattuso", 
    studentId: "10412769",
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
};
