/**
 * Created by Aliaksei on 11.06.2014.
 */
var express = require('express');
var app = express();
var db = require('./database');
var crud = require('./crudService')(db, 'items');
var bodyParser = require('body-parser');
var util = require('util');

app.use(bodyParser());
app.disable('x-powered-by');

app.get('/', function (req, res) {
	res.send("test");
});

app.all('*', function (req, res, next) {
	res.set('Access-Control-Allow-Origin', req.headers.origin);
	res.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	res.set('Access-Control-Allow-Credentials', false);
	res.set('Access-Control-Max-Age', '86400');
	res.set('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

	next();
});

// satisfy pre-flight
app.options('*', function (req, res) {
	res.send(200);
});

app.get('/items', function (req, res) {
	console.info("getAll");
	crud.getAll(function (data) {
		res.type("json");
		res.json(200, data);
	}, function (error) {
		res.send(500, error);
	});
});

app.post('/items', function (req, res) {
	console.info("create " + util.inspect(req.body));
	crud.create(req.body, function (data) {
		res.send(200, data);
	}, function (error) {
		res.send(500, error);
	});
});

app.delete('/items/:id', function (req, res) {
	console.log("delete " + req.params.id);
	crud.remove(req.params.id, function (data) {
		res.send(200, data);
	}, function (err) {
		res.send(500, err);
	});
});

var server = app.listen(8888, function () {
	console.log("Server run on port " + server.address().port);
});