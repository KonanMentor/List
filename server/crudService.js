/**
 * Created by Aliaksei on 11.06.2014.
 */

//var mongoose = require('mongoose');

module.exports = function (db, modelName) {
	var create = function (data, success, error) {
		db.model(modelName).create(data, function (err, data) {
			err ? error(err) : success(data);
		});
	};

	var getAll = function (success, error) {
		db.model(modelName).find({}, function (err, data) {
			err ? error(err) : success(data);
		});
	};

	var remove = function (id, success, error) {
		db.model(modelName).findByIdAndRemove(id, function (err, data) {
			err ? error(err) : success(data);
		})
	};

	return {
		create: create,
		getAll: getAll,
		remove: remove
	};
};