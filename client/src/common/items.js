/**
 * Created by 123 on 10.05.2014.
 */
var items = angular.module("items", []);

items.factory("Items", ['$http', function ($http){
	var list = [];
	return {
		getItemsAsync : function (success, error) {
			$http.get("http://192.168.1.35:8888/items").success(function (data) {
				list = data;
				success(data);
			}).error(error);
		},
		add : function (text, success, error) {
			$http.post("http://192.168.1.35:8888/items", {text: text})
				.success(function() {
					console.log("added");
					angular.isFunction(success) && success();
				})
				.error(function () {
					angular.isFunction(error) && error();
				});
		},
		remove : function (id, success, error) {
			$http.delete("http://192.168.1.35:8888/items/" + id)
				.success(function() {
					console.log("removed");
					angular.isFunction(success) && success();
				})
				.error(function () {
					angular.isFunction(error) && error();
				});
		}
	};
}]);