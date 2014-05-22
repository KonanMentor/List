/**
 * Created by 123 on 10.05.2014.
 */
module.exports = function (grunt) {
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-concat");

	grunt.initConfig({
		uglify: {
			dev : {
				files : {
					"src/bundle.min.js" : "src/bundle.js"
				}
			}
		},
		concat: {
			js : {
				src : ["bower_components/angular/angular.js", "bower_components/angular-route/angular-route.js", "bower_components/jquery/dist/jquery.js",
					"src/common/items.js", "src/app/list/list.js", "src/app/newItem/newItem.js", "src/app/app.js"],
				dest : "src/bundle.js"
			}
		}
	});

	grunt.registerTask("build", ["concat", "uglify"]);
};