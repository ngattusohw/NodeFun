const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const static = express.static(__dirname + "/public");
const palidrome = require("./js/isPalindrome.js");

const exphbs = require("express-handlebars");

app.use("/", static);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', function(req, res) {
    res.render("palidrome/index", {title: "The Best Palindrome Checker in the World!"});
});

app.post('/result', function(req, res){
	var the_text = req.body["text-to-test"].toLowerCase().replace(/[.,\/#!\'$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s+/g, '').replace("\'", "");
	var isBool = palidrome.isPalindrome(the_text);
	// res.render("palidrome/result", 
	// 	{
	// 		title: "The Palindrome Results!",
	// 		status: var_status,
	// 		status-message: status_message,
	// 		palidrome-response: response
	// 	});


	console.log(isBool);
});

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
