var express = require('express');
var app = express(); //init Express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


//init bodyParser to extract properties from POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//init Express Router
var router = express.Router();

app.listen(port);
console.log('Listening on port ' + port);