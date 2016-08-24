var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/olympicsrio';

router.get('/', function ( req,res ){
  res.sendFile(path.resolve('public/views/index.html'));
});

router.get('/hello', function (req, res){
  res.send(connectionString);
});

module.exports = router;
