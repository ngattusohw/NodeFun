var geometry = require('./geometry.js');


/* QUESTION 1 TESTS */
console.log("QUESTION 1");
	try{
		console.log(geometry.volumeOfRectangularPrism(-1,-2,3)); 
	}catch(e){
		console.log(e);
	}
    
    // console.log(geometry.volumeOfRectangularPrism([-5, 3, 10])); 
    // // 134
    // console.log(geometry.volumeOfRectangularPrism([2, 1, 2])); 
    // // 5 <--- actually should be 9, error in spec
    // console.log(geometry.volumeOfRectangularPrism([5, 10, 9])); 
    // // 206
    // console.log(geometry.volumeOfRectangularPrism([])); 
    // // Should print 0
    // console.log(geometry.volumeOfRectangularPrism([2])); 
    // // 4