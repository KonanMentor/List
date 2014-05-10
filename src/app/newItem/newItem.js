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

newItem.directive("focusAfterFormSubmit", function () {
	return {
		link : function ($scope, element, attrs) {
			$(element).focus();
			$(element).closest("form").on("submit", function () {
				$(element).focus();
			})
		}
	};
});