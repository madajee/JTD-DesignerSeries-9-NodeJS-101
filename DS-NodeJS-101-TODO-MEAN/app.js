var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
//var MongoClient = require('mongodb').MongoClient;

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

var connectString = config.getDbConnectionString();
//var connectString = "mongodb://localhost:27001/nodetodosample";
//console.log("ConnectString: " + connectString);
mongoose.connect(connectString);

setupController(app);
apiController(app);

app.listen(port);



