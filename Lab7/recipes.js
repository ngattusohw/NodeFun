
var uuidv1 = require('uuid/v1');
const mongoCollections = require("./mongoCollections");
const recipeCollect = mongoCollections.recipeCollection;

const createRecipe = async function createTask(id, title, ingredients, steps){
    if(arguments.length!==4||typeof title!== 'string'
        || typeof ingredients !== 'object' || ingredients.constructor !== Array
        || typeof steps !== 'object' || steps.constructor !== Array){

        throw "createRecipe failed on invalid input";
    }else{
        let return_task = {
            "_id":  (id && typeof id== 'string') ? id : uuidv1(),
            "title": title,
            "ingredients": ingredients,
            "steps": steps
        }

        //now do a mongo call to insert it into the collection
        const recipeCollection = await recipeCollect();

        const insertInfo = await recipeCollection.insertOne(return_task);
        if (insertInfo.insertedCount === 0) throw "Could not add the new recipe!";

        return return_task;

    }

}

const getAllRecipes = async function() { 
    const recipeCollection = await recipeCollect();
    const recipes = await recipeCollection.find({}).toArray();
    if(recipes){
        var the_array = [];
        for (var i = 0; i < recipes.length; i++) {
            var the_obj = {};
            the_obj._id = recipes[i]._id;
            the_obj.title = recipes[i].title;
            the_array.push(the_obj);
        }
        return the_array;
    }
    return recipes;
}

const getRecipe = async function(id) {
    if (!id||arguments.length!==1||typeof id!== 'string') throw "You must provide a valid id to search for";
    const recipeCollection = await recipeCollect();
    const recipe = await recipeCollection.findOne({ _id: id });
    if (recipe === null) throw "No recipe item with that id";
    return recipe;
}

const updateRecipe = async function(id, updatedPost) {
    if (!id||arguments.length!==2||typeof id!== 'string') throw "Invalid parameters for updating recipe!";
    const recipeCollection = await recipeCollect();
    const updatedPostData = {};

    if (updatedPost._id) {
      updatedPostData._id = updatedPost._id;
    }

    if (updatedPost.title) {
      updatedPostData.title = updatedPost.title;
    }

    if (updatedPost.ingredients) {
      updatedPostData.ingredients = updatedPost.ingredients;
    }

    if (updatedPost.steps) {
      updatedPostData.steps = updatedPost.steps;
    }

    let updateCommand = {
      $set: updatedPostData
    };
    const query = {
      _id: id
    };
    await recipeCollection.updateOne(query, updateCommand);

    return await this.getRecipe(id);

}

const removeRecipe = async function(id) {
    if(!id||arguments.length!==1||typeof id!== 'string') throw "You must provide an id to remove!";
    const recipeCollection = await recipeCollect();
    const deletionInfo = await recipeCollection.removeOne({ _id: id });

    if (deletionInfo.deletedCount === 0) {
      throw "Could not delete recipe with id of " + id;
    }else{
        return true;
    }
}

module.exports = {
    firstName: "Nicholas", 
    lastName: "Gattuso", 
    studentId: "10412769",
    createRecipe,
    getAllRecipes,
    getRecipe,
    updateRecipe,
    removeRecipe
};
