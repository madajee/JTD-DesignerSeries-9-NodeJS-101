var express = require('express');
var app = express();
var apiController = require('./controllers/apiController');
var port = process.env.PORT || 3000;

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

apiController(app);
app.listen(port);