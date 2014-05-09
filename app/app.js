/**
 * Created by 123 on 09.05.2014.
 */
var listApp = angular.module("listApp", ["ngRoute"]);

listApp.config(["$routeProvider", function ($routeProvider){
	$routeProvider
		.when("/list", {
			templateUrl: "partials/list.html",
			controller: "ListCtrl"
		})
		.when("/new", {
			templateUrl: "partials/new.html",
			controller: "NewCtrl"
		})
		.otherwise({
			redirectTo: "/list"
		});
}]);

listApp.factory("Items", function (){
	return {
		list : ["a", "b", 3.14],
		add : function (item) {
			this.list.push(item);
		}
	};
});

listApp.controller("ListCtrl", ["$scope", "Items", function ($scope, Items){
	$scope.items = Items.list;
}]);

listApp.controller("NewCtrl", ["$scope", "Items", function ($scope, Items){
	$scope.add = function () {
		Items.add($scope.item);
		$scope.item = "";
	};
}]);