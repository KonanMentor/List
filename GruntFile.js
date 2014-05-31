/**
 * Created by 123 on 10.05.2014.
 */
module.exports = function (grunt) {
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-cssmin");

	grunt.initConfig({
		uglify: {
			dev : {
				files : {
					"src/bundle.min.js" : "src/bundle.js"
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					"src/bundle.css" : ["src/app/**/*.css", "bower_components/bootstrap/dist/css/bootstrap.css"]
				}
			}
		},
		concat: {
			js : {
				src : ["bower_components/jquery/dist/jquery.js", "bower_components/bootstrap/dist/js/bootstrap.js", "bower_components/angular/angular.js", "bower_components/angular-route/angular-route.js", "bower_components/angular-ui-bootstrap/ui-bootstrap-tpls-0.11.0.js",
					"src/common/**/*.js", "src/app/**/*.js"],
				dest : "src/bundle.js"
			}
		}
	});

	grunt.registerTask("build", ["concat", "uglify", "cssmin"]);
};