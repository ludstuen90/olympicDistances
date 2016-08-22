var path = require('path');
var express = require('express');
var router = express.Router();

var pg = require('pg');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

//Static Page
app.use( express.static('public'));


// Route Inclusion

var base = require('./routes/coffee');

app.use('/', base);

//base url
// router.get( '/', function ( req, res ){
//   console.log( 'at base url' );
//   // res.sendFile( path.resolve( 'views/index.html' ) );
// });

// router.get('/sunshine', function(req, res){
//   console.log('hello');
//   res.sendFile( path.resolve( 'public/views/index.html' ) );
//
// });

// Spinning up the server
app.listen(process.env.PORT || 3000, function(){
  console.log('listening on server 3000');
});
