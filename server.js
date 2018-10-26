var express = require('express');
var key = process.env.api_key;

var app = express();

app.use(express.static('client'));


// set enviroment variable

var port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server is running on port ' + port);
});