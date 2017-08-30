module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'style.css': 'styles.scss'
            }
        }
    }
  });


  grunt.loadNpmTasks('grunt-sass'); 

  grunt.registerTask('default', ['sass']);

};