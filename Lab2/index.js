var geometry = require('./geometry.js');
var utilities = require('./utilities.js')

function try_catch(the_function_call){
	try{
		the_function_call();
	}catch(e){
		console.log(e);
	}
}


/* QUESTION 1 TESTS */
console.log("VolumeOfRectangularPrism!!! ");
    try_catch(function(){
    	console.log(geometry.volumeOfRectangularPrism(-1,-2,3));
    });

    try_catch(function(){
    	console.log(geometry.volumeOfRectangularPrism(10,"string",10));
    });

    try_catch(function(){
    	console.log(geometry.volumeOfRectangularPrism(1,NaN,1));
    });

    try_catch(function(){
    	console.log(geometry.volumeOfRectangularPrism(2,4,3));
    	//24
    });

    try_catch(function(){
    	console.log(geometry.volumeOfRectangularPrism(1,1,1));
    	//1
    });

console.log("SurfaceAreaOfRectangularPrism");
	try_catch(function(){
    	console.log(geometry.surfaceAreaOfRectangularPrism("hi",-2,3));
    });

    try_catch(function(){
    	console.log(geometry.surfaceAreaOfRectangularPrism(NaN,-2,3));
    });

    try_catch(function(){
    	console.log(geometry.surfaceAreaOfRectangularPrism(3,-2,3));
    });

    try_catch(function(){
    	console.log(geometry.surfaceAreaOfRectangularPrism(1,1,1));
    });
    //6
    try_catch(function(){
    	console.log(geometry.surfaceAreaOfRectangularPrism(2,2,3));
    });
    //32

console.log("volumeOfSphere");
	try_catch(function(){
    	console.log(geometry.volumeOfSphere("hi"));
    });

    try_catch(function(){
    	console.log(geometry.volumeOfSphere(NaN,-2,3));
    });

    try_catch(function(){
    	console.log(geometry.volumeOfSphere(NaN));
    });

    try_catch(function(){
    	console.log(geometry.volumeOfSphere(1));
    	//4.19
    });
    try_catch(function(){
    	console.log(geometry.volumeOfSphere(3));
    	//113.1
    });

console.log("surfaceAreaOfSphere");
	try_catch(function(){
    	console.log(geometry.surfaceAreaOfSphere("hi"));
    });

    try_catch(function(){
    	console.log(geometry.surfaceAreaOfSphere(NaN,-2,3));
    });

    try_catch(function(){
    	console.log(geometry.surfaceAreaOfSphere(NaN));
    });

    try_catch(function(){
    	console.log(geometry.surfaceAreaOfSphere(1));
    	//12.57
    });
    try_catch(function(){
    	console.log(geometry.surfaceAreaOfSphere(3));
    	//113.1
    });

console.log("Unique Elements");
	try_catch(function(){
		const testArr = ["a", "a", "b", "a", "b", "c"];
    	console.log(utilities.uniqueElements(testArr));
    	//3
    });

    try_catch(function(){
		const testArr = "hi";
    	console.log(utilities.uniqueElements(testArr));
    	//4
    });

console.log("Count Characters");
	try_catch(function(){
		const test = "Hello, the pie is in the oven";
		console.log(utilities.countOfEachCharacterInString(test))	; 
    	//3
    });

    try_catch(function(){
		const testArr = "hi";
    	console.log(utilities.countOfEachCharacterInString(testArr));
    	//4
    });

console.log("Deep equality");
	try_catch(function(){
		const first = {a: 2, b: 3};
		const second = {a: 2, b: 4};
		console.log(utilities.deepEquality(first, second)); // false
    });

    try_catch(function(){
    	const first = {a: 2, b: 3};
    	const third = {a: 2, b: 3};
		console.log(utilities.deepEquality(first, third)); // true
    });
