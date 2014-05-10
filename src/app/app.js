/**
 * Created by 123 on 09.05.2014.
 */
var listApp = angular.module("listApp", ["ngRoute", "list", "newItem"]);

listApp.config(["$routeProvider", function ($routeProvider){
	$routeProvider
		.when("/list", {
			templateUrl: "app/list/list.html",
			controller: "ListCtrl"
		})
		.when("/new", {
			templateUrl: "app/newItem/newItem.html",
			controller: "NewItemCtrl"
		})
		.otherwise({
			redirectTo: "/list"
		});
}]);