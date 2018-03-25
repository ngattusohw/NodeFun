const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const static = express.static(__dirname + "/public");
const palidrome = require("./js/isPalindrome.js");

const exphbs = require("express-handlebars");

app.use("/", static);
// app.use("/", express.static(__dirname));
// app.use("/", express.static(__dirname + "public/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', function(req, res) {
    res.render("palidrome/index", {title: "The Best Palindrome Checker in the World!"});
});

app.post('/result', function(req, res){
	if(req.body["text-to-test"]){
		var the_text = req.body["text-to-test"].toLowerCase().replace(/[.,\/#!\'\`\’$%\^&\*;?:{}=\-_`~()]/g,"").replace(/\s+/g, '').replace("\'", "");
		var isBool = palidrome.isPalindrome(the_text);

		if(isBool){
			//render success
			res.render("palidrome/result", 
			{
				title: "The Palindrome Results!",
				status: "success",
				status_message: "This string is a Palindrome!",
				palidrome_response: req.body["text-to-test"]
			});
		}else{
			//render fail
			res.render("palidrome/result", 
			{
				title: "The Palindrome Results!",
				status: "failure",
				status_message: "This string is NOT a Palindrome!",
				palidrome_response: req.body["text-to-test"]
			});
		}
	}else{
		//no input entered, send the client a 400
		res.status(400);
		res.render("palidrome/result", 
		{
			title: "The Palindrome Results!",
			status: "error",
			palidrome_response: "ERROR: Palindrome field should not be empty!"
		});
	}
});

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
