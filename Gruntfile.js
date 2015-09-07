module.exports = function (grunt) {

  grunt.initConfig({

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'public/styles/styles.css': 'public/sass/styles.scss'
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'public/styles/styles.min.css': [
            'public/styles/styles.css'
          ]
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      js: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js'
        ],
        dest: 'public/js/libs.js'
      }
    },

    uglify: {
      js: {
        files: {
          'public/js/libs.min.js': 'public/js/libs.js'
        }
      }
    },

    watch: {
      styles: {
        files: ['public/sass/**/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'concat']);
};