var express = require('express');
var app = express(); //init Express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var user = require('./models/user.model');

mongoose.connect('mongodb://localhost/mydbproject');

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

mongoose.connection.on('open', (success) => {
    console.log('Connected to mongo server');
    console.log('User model user', user);
});

//init bodyParser to extract properties from POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//init Express Router
var router = express.Router();

app.listen(port);
console.log('Listening on port ' + port);