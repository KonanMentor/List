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
					"src/app/bundle.min.js" : "src/app/bundle.js"
				}
			}
		},
		concat: {
			js : {
				src : ["src/common/items.js", "src/app/list/list.js", "src/app/newItem/newItem.js", "src/app/app.js"],
				dest : "src/app/bundle.js"
			}
		}
	});

	grunt.registerTask("build", ["concat", "uglify"]);
};