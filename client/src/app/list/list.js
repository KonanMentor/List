/**
 * Created by 123 on 10.05.2014.
 */
var list = angular.module("list", ["items"]);
list.controller("ListCtrl", ["$scope", "Items", function ($scope, Items){
	$scope.reload = function () {
		Items.getItemsAsync(function (data) {
			$scope.items = data;
		});
	};

	$scope.remove = function (id) {
		Items.remove(id, function () {
			$scope.reload();
		});
	};

	$scope.reload();
}]);