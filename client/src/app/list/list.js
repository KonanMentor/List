/**
 * Created by 123 on 10.05.2014.
 */
var list = angular.module("list", ["items"]);
list.controller("ListCtrl", ["$scope", "Items", function ($scope, Items){
	$scope.items = Items.list;
	$scope.remove = function (index) {
		Items.remove(index);
	};
}]);