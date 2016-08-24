var path = require('path');
var express = require('express');
var router = express.Router();

var pg = require('pg');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

//Static Page
app.use( express.static('public'));

//Strategy Inclusion
var connection = require('./strategies/connection');

// Route Inclusion

var base = require('./routes/base');

app.use('/', base);


// Spinning up the server
app.listen(process.env.PORT || 3000, function(){
  console.log('connection string is now', connection);
  console.log('listening on server 3000');
});
