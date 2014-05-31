/**
 * Created by Aliaksei on 29.05.2014.
 */
var alerts = angular.module("alerts", []);

alerts.controller("AlertsCtrl", ["$scope", function ($scope) {
	$scope.ref = {};
	$scope.ref.alerts = [];

	$scope.ref.add = function (msg, type) {
		$scope.ref.alerts.push({msg: msg, type: type || "success"});
	};

	$scope.ref.remove = function (index) {
		$scope.ref.alerts.splice(index, 1);
	};
}]);