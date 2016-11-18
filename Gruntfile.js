'use strict';
module.exports = function (grunt) {

  grunt.initConfig({
    production_path: '/',
    cssmin: {

      development: {
        files: {
          'checkbox/bootstrap-buttons.min.css': [
            'bootstrap.css'

          ]

        }
      }
    },
    uglify: {
      options: {
        mangle: true,
        preserveComments: 'some'
      },
      my_target: {
        files: {
          'optionmouse.min.js': ['js/optionmouse.js']
        }
      }
    },
  
    watch: {
      options: {
        livereload:true
      },
      scripts: {
        files: ['js/optionmouse.js'],
        tasks: ['process']
      }
    }
  });

  // Load all grunt tasks

  // LESS Compiler
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Watch File Changes
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Compress JS Files
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Copy Files
  // grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-newer');
  // The default task (running "grunt" in console) is "watch"

  grunt.registerTask('process', ['newer:uglify']);
  grunt.registerTask('default', ['cssmin','uglify' , 'watch']);
  // grunt.registerTask('deploy', ['less', 'uglify', 'copy']);
};