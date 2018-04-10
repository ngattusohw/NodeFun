/*
Nicholas Gattuso
I pledge my honor that I have abided by the stevens honor system
 */
const express = require("express");
const exphbs = require("express-handlebars");
const cookieParser = require('cookie-parser');
const users = require('./utils/users.js');

const app = express();
app.use(cookieParser());
// app.use("/", static);

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
		)
	}
    //res.render("palidrome/index", {title: "The Best Palindrome Checker in the World!"});
});

app.post('/login', function(req, res){
	// if(req.body["text-to-test"]){
	// 	var the_text = req.body["text-to-test"].toLowerCase().replace(/[.,\/#!\'\`\’$%\^&\*;?:{}=\-_`~()]/g,"").replace(/\s+/g, '').replace("\'", "");
	// 	var isBool = palidrome.isPalindrome(the_text);

	// 	if(isBool){
	// 		//render success
	// 		res.render("palidrome/result", 
	// 		{
	// 			title: "The Palindrome Results!",
	// 			status: "success",
	// 			status_message: "This string is a Palindrome!",
	// 			palidrome_response: req.body["text-to-test"]
	// 		});
	// 	}else{
	// 		//render fail
	// 		res.render("palidrome/result", 
	// 		{
	// 			title: "The Palindrome Results!",
	// 			status: "failure",
	// 			status_message: "This string is NOT a Palindrome!",
	// 			palidrome_response: req.body["text-to-test"]
	// 		});
	// 	}
	// }else{
	// 	//no input entered, send the client a 400
	// 	res.status(400);
	// 	res.render("palidrome/result", 
	// 	{
	// 		title: "The Palindrome Results!",
	// 		status: "error",
	// 		palidrome_response: "ERROR: Palindrome field should not be empty!"
	// 	});
	// }
});

app.get('/private', function(req, res) {
    //res.render("palidrome/index", {title: "The Best Palindrome Checker in the World!"});
});

app.get('/logout', function(req, res) {
    //res.render("palidrome/index", {title: "The Best Palindrome Checker in the World!"});
});

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");

  if (process && process.send) process.send({done: true});
});
