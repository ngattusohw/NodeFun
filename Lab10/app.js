/*
Nicholas Gattuso
I pledge my honor that I have abided by the stevens honor system
 */
const express = require("express");
const exphbs = require("express-handlebars");
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
var path = require('path');

const users = require('./utils/users.js');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use("/", express.static(path.join(__dirname + '/css')));
app.use("/", express.static(path.join(__dirname + '/js')));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', function(req, res) {
	if(req.cookies.AuthCookie){
		//they are authenticated, redirect to /private!
		res.redirect("/private");
	}else{
		//they are not authenticated
		res.render("login",
			{
				"title": "Login!"
			}
		);
	}
    //res.render("palidrome/index", {title: "The Best Palindrome Checker in the World!"});
});

app.post('/login', async function(req, res){
	if(req.body.username && req.body.password){
		console.log(req.body.username);
		var isEqual = false;
		for (var i = 0; i < users.length; i++) {
			if(users[i].username === req.body.username){
				try{
					console.log("Req password " + req.body.password);
					console.log("Hashed Password " + users[i].hashedPassword);
					console.dir(users);
					console.log(users[i]);
					isEqual = await bcrypt.compare(req.body.password, users[i].hashedPassword);
					if(isEqual === true){
						break;
					}
				}catch(e){
					isEqual = false;
					console.log(e);
				}
			}else{
				isEqual = false;
			}
		}

		if(isEqual === true){
			bcrypt.hash(req.body.username, 16, function(err, hash) {
				if(!err){
					res.set('Set-Cookie', 'AuthCookie=' + hash);
					res.redirect("/private");
					console.log("Good job!");
				}else{
					res.status(404).json("Unable to generate authentication. Error with bcrypt");
				}
			});
			
		}else{
			res.render("login",
				{
					"title": "Login!",
					"error": "Invalid Credentials! Please try again."
				}
			);
		}
	}else{
		res.status(500).json("There was an error!");
	}
});

app.get('/private', async function(req, res) {
    //res.render("palidrome/index", {title: "The Best Palindrome Checker in the World!"});
    if(req.cookies.AuthCookie){
  //   	var result = users.filter(async function( obj ) {
  //   		var getElem = false;
  //   		try{
  //   			getElem = await bcrypt.compare(obj.username, req.cookies.AuthCookie);
  //   		}catch(e){
  //   			return [];
  //   		}
  //   		return getElem;
		// });
		var compareCookie = false;
		var theUser = {};
		for (var i = 0; i < users.length; i++) {
			try{
				compareCookie = await bcrypt.compare(users[i].username, req.cookies.AuthCookie);
				if(compareCookie === true){
					//THIS IS AWFUL 0/10 SHOULD DO DYNAMICALLY BUT TOO LAZY
					theUser._id = users[i]._id;
					theUser.username = users[i].username;
					theUser.firstName = users[i].firstName;
					theUser.lastName = users[i].lastName;
					theUser.Profession = users[i].Profession;
					theUser.Bio = users[i].Bio;
					break;
				}
			}catch(e){
				res.status(404).json("Internal Service Error! " + e);
				break;
			}
		}
		res.status(200).json(theUser);
		//TODO FIX THIS, ADD HANDLING FOR CASE FOR RANDOM COOKIE
    }else{
    	res.status(403).render("login",
    		{
    			"title": "Error! Please login!",
    			"error": "ERROR: You are not logged in! Please login to view this page."
    		}
    	)
    }
});

app.get('/logout', function(req, res) {
    //res.render("palidrome/index", {title: "The Best Palindrome Checker in the World!"});
    res.clearCookie('AuthCookie');
    res.render("login",
    	{
    		"title": "Login!",
    		"error": "You have been logged out!"	
    	}
    );
});

app.get("*", function(req,res){
	res.status(404).json("Error! Not implemented!");
});

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");

  if (process && process.send) process.send({done: true});
});
