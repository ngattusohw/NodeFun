const todoItems = require("./todo.js");

async function main() {
	try{
	    const createdTask = await todoItems.createTask("My Second Task", "This is the first thing I need to do today");
	    console.log(createdTask);

	    const allItems = await todoItems.getAllTasks();
	    console.log(allItems);
	}catch(e){
		console.log(e);
	}
}

main();