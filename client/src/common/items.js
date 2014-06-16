/**
 * Created by 123 on 10.05.2014.
 */
var items = angular.module("items", []);

items.factory("Items", ['$http', function ($http){
	var list = [];
	return {
		getItemsAsync : function (success, error) {
			$http.get("http://localhost:8888/items").success(function (data) {
				list = data;
				success(data);
			}).error(error);
		},
		add : function (text, success, error) {
			$http.post("http://localhost:8888/items", {text: text})
				.success(function() {
					angular.isFunction(success) && success();
				})
				.error(function () {
					angular.isFunction(error) && error();
				});
		},
		remove : function (id, success, error) {
			$http.delete("http://localhost:8888/items/" + id)
				.success(function() {
					angular.isFunction(success) && success();
				})
				.error(function () {
					angular.isFunction(error) && error();
				});
		}
	};
}]);