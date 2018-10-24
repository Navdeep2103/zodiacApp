var express = require('express');

var app = express();

app.use(express.static(__dirname + '/client'));
// set enviroment variable

var port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server is running on port ' + port);
});