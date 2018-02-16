
var uuidv1 = require('uuid/v1');
const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;

const createTask = async function createTask(title, description){
    if(arguments.length!==2||typeof title!== 'string'||typeof description!=='string'){
        throw "createTask failed on invalid input";
    }else{
        let return_task = {
            "_id": uuidv1(),
            "title": title,
            "description": description,
            "completed": false,
            "completedAt": null
        }

        //now do a mongo call to insert it into the collection
        const todoCollection = await todoItems();

        const insertInfo = await todoCollection.insertOne(return_task);
        if (insertInfo.insertedCount === 0) throw "Could not add the new task!";

        return insertInfo;

    }


}

const getAllTasks = async function() { 
    const todoCollection = await todoItems();
    const toDo = await todoCollection.find({}).toArray();
    return toDo;
}

const getTask = async function(id) {
    if (!id) throw "You must provide an id to search for";
    const todoCollection = await todoItems();
    const todo = await todoCollection.findOne({ _id: id });
    if (todo === null) throw "No todo item with that id";
    return todo;
}

const completeTask = function(id) {

}

const removeTask = function(id) {

}


module.exports = {
    firstName: "Nicholas", 
    lastName: "Gattuso", 
    studentId: "10412769",
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask
};
