const volumeOfRectangularPrism = function volumeOfRectangularPrism(length, width, height) {
    // Implement question 1 here
    if(arguments.length===3){
        if((typeof length === 'number' && isFinite(length)) && 
            (typeof width === 'number' && isFinite(width)) &&
            (typeof height === 'number' && isFinite(height))){
            if(length > 0 && width > 0 && height > 0){
                return (length * width * height);
            }else{
                throw "One or more arguments is out of range! Please enter numbers above 0";
            }
        }else{
            throw "One or more arguments is not a number";
        }
    }else{
        throw "Incorrect amount of arguments -- 3 argument of type int needed";
    }
}

const surfaceAreaOfRectangularPrism = function surfaceAreaOfRectangularPrism(length, width, height) { 
    // Implement question 2 here
    if(arguments.length===3){
        if((typeof length === 'number' && isFinite(length)) && 
            (typeof width === 'number' && isFinite(width)) &&
            (typeof height === 'number' && isFinite(height))){
            if(length > 0 && width > 0 && height > 0){
                return 2 * ((width * length) + (height * length) + (height * width));
            }else{
                throw "One or more arguments is out of range! Please enter numbers above 0";
            }
        }else{
            throw "One or more arguments is not a number";
        }
    }else{
        throw "Incorrect amount of arguments -- 3 argument of type int needed";
    }

}

const volumeOfSphere = function volumeOfSphere(radius) {
    // Implement question 3 here
    if(arguments.length===1){
        if(typeof radius === 'number' && isFinite(radius)){
            if(radius > 0){
                return (4/3) * Math.PI * Math.pow(radius, 3);
            }else{
                throw "One or more arguments is out of range! Please enter numbers above 0";
            }
        }else{
            throw "One or more arguments is not a number";
        }
    }else{
        throw "Incorrect amount of arguments -- 1 argument of type int needed";
    }
    
}

const surfaceAreaOfSphere = function surfaceAreaOfSphere(radius) {
    // Implement question 4 here
    if(arguments.length===1){
        if(typeof radius === 'number' && isFinite(radius)){
            if(radius > 0){
                return 4 * Math.PI * Math.pow(radius, 2);
            }else{
                throw "One or more arguments is out of range! Please enter numbers above 0";
            }
        }else{
            throw "One or more arguments is not a number";
        }
    }else{
        throw "Incorrect amount of arguments -- 1 argument of type int needed";
    }
    
}

module.exports = {
    firstName: "Nicholas", 
    lastName: "Gattuso", 
    studentId: "10412769",
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
};
