
var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(__dirname + '/Client'));
app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

var port = process.env.PORT || 3000;
  app.listen(port, () => {
console.log('Server is running on port ' + port);
	});

