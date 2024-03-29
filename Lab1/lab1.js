const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let sum = 0;
    for(var iterator = 0; iterator < arr.length; iterator++){
        sum+=(arr[iterator] * arr[iterator]);
    }
    return sum;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if(num <= 1){
        if(num === 1){
            return 1;
        }else{
            return 0;
        }
    }else{
        if(!isNaN(num)){
            return questionTwo(num - 1) + questionTwo(num - 2);
        }else{
            return "Input error. Please input a number!";
        }
    }

}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    if (typeof text === 'string' || text instanceof String){
        var m = text.match(/[aeiou]/gi);
        return m === null ? 0 : m.length;
    }else{
        return "Invalid type :: please enter a string!";
    }
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if(num === 0){
        return 1;
    }else if(num < 0){
        return NaN;
    }else{
        if(!isNaN(num)){
            return num * questionFour(num - 1);
        }else{
            return "Input error. Please input a number!";
        }
    }
}

module.exports = {
    firstName: "Nicholas", 
    lastName: "Gattuso", 
    studentId: "10412769",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};