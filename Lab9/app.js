const express = require("express");
const app = express();
var path = require('path');
var static = express.static(__dirname + "/css");

app.use("/css", static);
app.use("/js", express.static(__dirname + "/js"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('*', function(req,res) {
	res.json("Error!").status(404).end();
});

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
