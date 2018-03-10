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

        // res.end(JSON.stringify({
        //     "name": "Nicholas Gattuso",
        //     "cwid": "10412769",
        //     "biography": "I am a passionate entrpenur (how do you spell that!) and programmer.\n" +
        //                 "I am devoted to using my skills as a programmer to help others by innovating software.\n" +
        //                 "I also really love playing the drums \n",
        //     "favoriteShows": ["The sopranos", "breaking bad", "The walking Dead", "The office"],
        //     "hobbies": ["Innovating", "programming", "video games"]
        // }));
        
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

        // res.end(JSON.stringify({
        //     "storyTitle": "This one time, at band camp.",
        //     "story": "I love to play drums. But I also loved playing soccer. This is why, when I was pulled off of freshman soccer try-outs to go to the first day of percussion camp at the Point Pleasant Borough High School's marching band, I was extremely conflicted. When I got there, at the time I was positive that I was making the correct choice of dropping my 9 year passion of soccer, for my other, equally as loved passion of drumming. However, as time went on, that desicion became one to haunt me for the rest of my high school career. Dun dun dun!"
        // }));

    });

    app.post('/recipes', jsonParser , async function(req, res) {
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        res.header("Access-Control-Allow-Origin", "*");

        // console.log(req.body);
        try{
            var return_recipe = await recipeModule.createRecipe(req.body._id,req.body.title,
                                                                req.body.ingredients,req.body.steps);
            res.status(200).send(JSON.stringify(return_recipe));
        }catch(e){
            res.status(500).send(JSON.stringify({ error: e }));
        }
        
        
        // res.end(JSON.stringify(
        // ));
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


        // res.end(JSON.stringify(
        // ));
    });

    app.patch('/recipes/:id', jsonParser, async function(req, res) {
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        res.header("Access-Control-Allow-Origin", "*");

        const updatedData = req.body;
        try {
            await recipeModule.getRecipe(req.params.id);
        } catch (e) {
            res.status(404).json({ error: "Recipe not found!" });
        }

        try {
            const updatedRecipe = await recipeModule.updateRecipe(req.params.id, updatedData);
            res.status(200).send(JSON.stringify(updatedRecipe));
        } catch (e) {
            res.status(500).json({ error: e });
        }


        // res.end(JSON.stringify(
        // ));
    });

    app.delete('/recipes/:id', async function(req, res) {
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        res.header("Access-Control-Allow-Origin", "*");
        // res.end(JSON.stringify(
        // ));
        
        try{
            var didDelete = await recipeModule.removeRecipe(req.params.id);
            res.status(200).send(JSON.stringify({success: didDelete}));
        }catch(e){
            res.status(500).send(JSON.stringify({ error: e }));
        }
    });

    app.use('*', function(req, res) {
        res.status(500).json("Error! Endpoint not found!");
    });
});