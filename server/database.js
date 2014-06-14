/**
 * Created by Aliaksei on 11.06.2014.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/items');
var db = mongoose.connection;

db.on('error', function (err) {
	console.error('DB connection error:', err.message);
});
db.once('open', function callback () {
	console.info("Connected to DB!");
});

var ItemSchema = mongoose.Schema({
	text: {type: String, required: true}
});

var models = {};
models['items'] = mongoose.model('Item', ItemSchema);

var model = function (modelName) {
	var name = modelName.toLowerCase();
	if (!models.hasOwnProperty(name)) throw "Model '" + name + "' is not exist";
	return models[name];
};

module.exports.model = model;