(function(){
  'use strict';
  module.exports = (grunt) => {
    grunt.initConfig({
      jshint: {
        dist:{
          src: ['**/js/**/*.js']
        }
      },
      concat:{
        dist:{
          src: ['cli/js/**/*.js', 'cli/js/*.js'],
          dest: 'cli/dist/js/scripts.js'
        },
      },
      /*
      uglify:{
        scripts:{
          src: ['cli/dist/js/scripts.js'],
          dest: 'cli/dist/js/scripts.min.js'
        }
      }, */
      cssmin:{
        all:{
          src: ['cli/css/*.css'],
          dest: 'cli/dist/css/style.min.css'
        }
      },
      htmlmin:{
        views:{
          options:{
            removeComments: true,
            collapseWhitespace: true
          },
          expand: true,
          cwd: 'cli/views',
          src: ['cli/views/*.html']
        }
      }
    });

    // LOAD THE PLUGINS
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');


    // TASKS
    grunt.registerTask('default', ['cssmin', 'htmlmin', 'concat']);
  }
})();
