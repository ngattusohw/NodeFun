/*
Nick Gattuso I pledge my honor I have abided by the stevens honor system
 */

var express = require("express");
var app = express();

var listener = app.listen(3000,function(){

    console.log("Listening on port 3000");
    app.get('/about', function(req, res) {
        
        console.log("In get data")
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        res.header("Access-Control-Allow-Origin", "*");
        res.end(JSON.stringify({
            "name": "Nicholas Gattuso",
            "cwid": "10412769",
            "biography": "I am a passionate entrpenur (how do you spell that!) and programmer.\n" +
                        "I am devoted to using my skills as a programmer to help others by innovating software.\n" +
                        "I also really love playing the drums \n",
            "favoriteShows": ["The sopranos", "breaking bad", "The walking Dead", "The office"],
            "hobbies": ["Innovating", "programming", "video games"]
        }));
    });

    app.get('/story', function(req, res) {
        console.log("In get story")
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        res.header("Access-Control-Allow-Origin", "*");
        res.end(JSON.stringify({
            "storyTitle": "This one time, at band camp.",
            "story": "I love to play drums. But I also loved playing soccer. This is why, when I was pulled off of freshman soccer try-outs to go to the first day of percussion camp at the Point Pleasant Borough High School's marching band, I was extremely conflicted. When I got there, at the time I was positive that I was making the correct choice of dropping my 9 year passion of soccer, for my other, equally as loved passion of drumming. However, as time went on, that desicion became one to haunt me for the rest of my high school career. Dun dun dun!"
        }));

    });

    app.get('/education', function(req, res) {

        console.log("In get education")
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        res.header("Access-Control-Allow-Origin", "*");
        res.end(JSON.stringify(
            [
                {
                  "schoolName": "Stevens Institute of Technology",
                  "degree": "B.S Computer Science",
                  "favoriteClass": "CS-546",
                  "favoriteMemory": "Being involved at the Stevens Venture Center, being a member of one startup and the owner of another startup"
                },
                {
                  "schoolName": "Point Pleasant Borough HighSchool",
                  "degree": "GED Dipolma",
                  "favoriteClass": "Advanced Software Engineering Topics",
                  "favoriteMemory": "Starting the PALS initative that helped the special needs stuents with their day to day lives."
                },
                {
                  "schoolName": "Point Pleasant Borough Middle School",
                  "degree": "Middle School Dipolma?",
                  "favoriteClass": "Math",
                  "favoriteMemory": "Getting detention for skipping detention for chewing gum."
                }
            ]
        ));
    });

    app.use('*', function(req, res) {
        res.status(401).json("Error! Endpoint not found!");
    });
});