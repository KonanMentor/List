/**
 * Created by 123 on 10.05.2014.
 */
var newItem = angular.module("newItem", ["items"]);

newItem.controller("NewItemCtrl", ["$scope", "Items", function ($scope, Items){
	$scope.add = function () {
		Items.add($scope.item);
		$scope.item = "";
	};
}]);