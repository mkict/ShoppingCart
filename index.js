var express = require('express');
var logger = require('morgan');
var app = express();
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(logger('dev'));

app.use('/src', express.static(__dirname + '/src'));
app.use('/build', express.static(__dirname + '/build'));

// Connection URL
var url = 'mongodb://188.166.189.216:37017/itim';
// Use connect method to connect to the Server

/*app.get('/api/item/all',(req,res)=>{
	fs.readFile('./data/product.json',(err,result)=>{
		res.send(JSON.parse(result.toString()));
	});
});*/

app.get('/api/item/clean',(req,res)=>{
  	MongoClient.connect(url, function(err, db) {
  		var collection = db.collection('product');
  		collection.remove(function(err,r){
  			res.send({success:true});
  			db.close();
  		});
	});
});

app.get('/api/item/all',(req,res)=>{
  	MongoClient.connect(url, function(err, db) {
  		var collection = db.collection('product');
  		collection.find().toArray(function(err,r){
  			res.send({success:true,result:r.map((v)=> Object.assign(v,{id:v._id}))});
  			db.close();
  		});
	});
});

app.post('/api/item/update',(req,res)=>{
  	MongoClient.connect(url, function(err, db) {
  		var collection = db.collection('product');
  		req.body.forEach(function(item){
  			collection.update(
  				{"_id": item.id}, {$set: {amount: item.amount}}
  				);
  			});
	});
});

app.get('/api/item/insert/:name/:amount',(req,res)=>{
	MongoClient.connect(url, function(err, db) {
		  var collection = db.collection('product');
		  collection.insert(
		      { "name":req.params.name,"amount": parseInt(req.params.amount) }
		  , function(err, result) {
		 	res.send({success:true});
		 	db.close();
		  });

    	db.close();
	});
});

app.use('/', function(req, res) {
	res.sendFile(__dirname + '/src/index.html');
});


app.listen(3000, function() {
	console.log('listening on *:3000');
}); 
