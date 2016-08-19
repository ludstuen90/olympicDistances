var path = require('path');
var express = require('express');
var router = express.Router();

var pg = require('pg');
var bodyParser = require('body-parser');
var app = express();

app.use (bodyParser.json());

// Route Inclusion



//Static Page
app.use(express.static('./public'));

// app.use('/', home);


//base url

router.get('/', function(req, res){
  console.log('at base url');
  res.sendFile(path.resolve('views/index.html'));
});


app.listen(process.env.PORT || 3000, function(){
  console.log('server up, and listening on 3000');
});
