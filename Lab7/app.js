/*
Nick Gattuso I pledge my honor I have abided by the stevens honor system
 */
var express = require("express");
var app = express();
var recipeModule = require("./recipes.js");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


var listener = app.listen(3000,function(){

    console.log("Listening on port 3000");
    app.get('/recipes', async function(req, res) {
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        res.header("Access-Control-Allow-Origin", "*");

        try{
            var return_recipes = await recipeModule.getAllRecipes();
            res.status(200).send(JSON.stringify(return_recipes));
        }catch(e){
            console.log("Error: " + e );
            res.status(500).send(JSON.stringify({ error: e }));
        }
        
    });

    app.get('/recipes/:id', async function(req, res) {
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        res.header("Access-Control-Allow-Origin", "*");
        var id = req.params.id;

        try{
            var return_recipe = await recipeModule.getRecipe(id);
            res.status(200).send(JSON.stringify(return_recipe));
        }catch(e){
            res.status(404).send(JSON.stringify({ error: e }));
        }

    });

    app.post('/recipes', jsonParser , async function(req, res) {
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        res.header("Access-Control-Allow-Origin", "*");

        try{
            var return_recipe = await recipeModule.createRecipe(req.body._id,req.body.title,
                                                                req.body.ingredients,req.body.steps);
            res.status(200).send(JSON.stringify(return_recipe));
        }catch(e){
            res.status(500).send(JSON.stringify({ error: e }));
        }
        
    });

    app.put('/recipes/:id', jsonParser, async function(req, res) {
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        res.header("Access-Control-Allow-Origin", "*");

        try {
            await recipeModule.getRecipe(req.params.id);
        } catch (e) {
            res.status(404).json({ error: "No recipe to replace!" });
        }

        try {
            await recipeModule.removeRecipe(req.params.id);
            const newRecipe = await recipeModule.createRecipe(req.body._id,req.body.title,
                                                                req.body.ingredients,req.body.steps);
            res.status(200).send(JSON.stringify(newRecipe));
        } catch (e) {
            res.status(500).json({ error: e });
        }

    });

    app.patch('/recipes/:id', jsonParser, async function(req, res) {
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        res.header("Access-Control-Allow-Origin", "*");

        const updatedData = req.body;
        try {
            await recipeModule.getRecipe(req.params.id);
        } catch (e) {
            res.status(404).json({ error: "Recipe not found! Can not update" });
        }

        try {
            const updatedRecipe = await recipeModule.updateRecipe(req.params.id, updatedData);
            res.status(200).send(JSON.stringify(updatedRecipe));
        } catch (e) {
            res.status(500).json({ error: e });
        }

    });

    app.delete('/recipes/:id', async function(req, res) {
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        res.header("Access-Control-Allow-Origin", "*");
        
        try{
            var didDelete = await recipeModule.removeRecipe(req.params.id);
            res.status(200).end();
        }catch(e){
            res.status(500).send(JSON.stringify({ error: e }));
        }
    });

    app.use('*', function(req, res) {
        res.status(500).json("Error! Endpoint not found!");
    });
});