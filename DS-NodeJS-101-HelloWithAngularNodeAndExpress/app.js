var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var message = "Hello With Angular, Node & Express";

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	
	res.render('index', {serverMessage: message});
	
});

app.listen(port);