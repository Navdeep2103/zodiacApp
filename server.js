var express = require('express');
var key = process.env.api_key;
var path = require('path');
 var app = express();
 app.set('view engine', 'html');






// set enviroment variable

var port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '/client')));
app.set('view engine', 'html');


app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, () => {
	console.log('Server is running on port ' + port);
});