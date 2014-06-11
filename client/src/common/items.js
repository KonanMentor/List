/**
 * Created by 123 on 10.05.2014.
 */
var items = angular.module("items", []);

items.factory("Items", function (){
	return {
		list : ["a", "b", 3.14],
		add : function (item) {
			this.list.push(item);
		},
		remove : function (index) {
			this.list.splice(index, 1);
		}
	};
});