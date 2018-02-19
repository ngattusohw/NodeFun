/*
Nick Gattuso
I pledge my honor that I have abided by the stevens honor system

 */



const todoItems = require("./todo.js");

async function main() {
	try{
	    // const createdTask = await todoItems.createTask("My Second Task", "This is the first thing I need to do today");
	    // console.log(createdTask);

	    // const removeAllItems = await todoItems.getAllTasks();
	    // for(var i = 0; i < removeAllItems.length; i++){
	    // 	let x = todoItems.removeTask(removeAllItems[i]._id);
	    // }
	    //console.log(allItems);

	    // const getItemWithId = await todoItems.getTask("ae8de7a0-14e2-11e8-884a-abf1d22c0d55");
	    // console.log(getItemWithId);

	    // const completeTask = await todoItems.completeTask("ae8de7a0-14e2-11e8-884a-abf1d22c0d55");
	    // console.log(completeTask);
	    

	    const createdTask1 = await todoItems.createTask("Ponder Dinosaurs","Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"); 
	    console.log(createdTask1);

	    const createdTask2 = await todoItems.createTask("Play Pokemon with Twitch TV","Should we revive Helix?");

	    const allItems = await todoItems.getAllTasks();
	    console.log(allItems);

	    const deletedItem = await todoItems.removeTask(allItems[0]._id);

	    const allRemainingItems = await todoItems.getAllTasks();
	    console.log(allRemainingItems);

	    const completedTask = await todoItems.completeTask(allRemainingItems[0]._id);
	    console.log(completedTask);



	}catch(e){
		console.log("Failure::  " + e);
	}
}

main();