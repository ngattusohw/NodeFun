
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

        return return_task;

    }

}

const getAllTasks = async function() { 
    const todoCollection = await todoItems();
    const toDo = await todoCollection.find({}).toArray();
    return toDo;
}

const getTask = async function(id) {
    if (!id||arguments.length!==1||typeof id!== 'string') throw "You must provide a valid id to search for";
    const todoCollection = await todoItems();
    const todo = await todoCollection.findOne({ _id: id });
    if (todo === null) throw "No todo item with that id";
    return todo;
}

const completeTask = async function(id) {
    if (!id||arguments.length!==1||typeof id!== 'string') throw "You must provide a valid id to search for";
    const todoCollection = await todoItems();

    var updatedtoDo = await getTask(id);
    updatedtoDo.completed = true;
    updatedtoDo.completedAt = new Date();

    const updatedInfo = await todoCollection.replaceOne(
      { _id: id },
      updatedtoDo
    );

    if (updatedInfo.modifiedCount === 0) {
      throw "could not update todo successfully";
    }

    return await this.getTask(id);

}

const removeTask = async function(id) {
    if(!id||arguments.length!==1||typeof id!== 'string') throw "You must provide an id to remove!";
    const todoCollection = await todoItems();
    const deletionInfo = await todoCollection.removeOne({ _id: id });

    if (deletionInfo.deletedCount === 0) {
      throw "Could not delete todo with id of ${id}";
    }else{
        return true;
    }
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
