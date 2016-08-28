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

router.post('/raceResult', function(req, res){
  console.log(global.randomId);

  var resultsOlympics= [];
    pg.connect(connectionString, function(err, client, done){
      var search = ('SELECT * FROM results ORDER BY RANDOM() LIMIT 1');
      var query1 = client.query(search);
      query1.on('row', function(row){
        resultsOlympics.push(row);
      });
      query1.on('end', function(){
        done();
        pg.end();
        console.log(resultsOlympics);
        global.randomId++;
        return res.json(resultsOlympics);
      });
    });
});

module.exports = router;
