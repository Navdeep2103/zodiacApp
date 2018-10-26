var express = require('express');
var key = process.env.api_key;

var app = express();
var fs = require('fs');

app.get('/',(req,res)=>{
fs.readFile('/client/index.html');
});


// set enviroment variable

var port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server is running on port ' + port);
});