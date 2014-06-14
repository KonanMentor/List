/**
 * Created by 123 on 10.05.2014.
 */
var newItem = angular.module("newItem", ["items", "ui.bootstrap"]);

newItem.controller("NewItemCtrl", ["$scope", "Items", function ($scope, Items){
	$scope.add = function () {
		Items.add($scope.text,
			function () {
				$scope.message = '"' + $scope.text + "\" has been successfully added.";
				$scope.messageType = "alert-success";
				$scope.text = "";
			},
			function () {
				$scope.message = "Sorry, some server error."
				$scope.messageType = "alert-danger";
				$scope.text = "";
			}
		);
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