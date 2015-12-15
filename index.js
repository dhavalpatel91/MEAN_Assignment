var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser  = require('body-parser');

var app = express();
var BrokersSchema = {
  name: String,
  BrokersId: String,
  webpage: String
};

mongoose.connect('mongodb://localhost/BrokersDetails');
var Brokers = mongoose.model('Brokers', BrokersSchema, 'Broker');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/Broker', function (req, res) {
  console.log('Finding Broker with filter: ', req.query);
  Brokers.find({}, function (err, doc) {
    res.send(doc);
  });
});

app.get('/Broker/:id', function (req, res) {
  console.log('Finding Brokers with ID: ', req.params.id);
  Brokers.findById(req.params.id, function (err, foundDocument) {
    res.send(foundDocument);
  });
});

app.post('/Broker', function (req, res) {
  console.log('Creating Brokers: ', req.body);
  new Brokers(req.body).save(function (err, doc) {
    res.send(doc);
  });
});

app.delete('/Broker/:id', function(req, res){
  console.log('Deleting Brokers with ID: ' + req.params.id);
  Brokers.remove({_id: req.params.id}, function (err, doc) {
    res.send(doc);
  });
});

app.listen(3000);