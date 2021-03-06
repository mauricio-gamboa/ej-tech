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
          'public/styles/libs.min.css': [
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'bower_components/font-awesome/css/font-awesome.css',
            'bower_components/OwlCarousel/owl-carousel/owl.carousel.css',
            'bower_components/OwlCarousel/owl-carousel/owl.theme.css',
            'bower_components/hover/css/hover.css'
          ],
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
          'bower_components/bootstrap/dist/js/bootstrap.js',
          'bower_components/OwlCarousel/owl-carousel/owl.carousel.js'
        ],
        dest: 'public/js/libs.js'
      }
    },

    uglify: {
      js: {
        files: {
          'public/js/libs.min.js': 'public/js/libs.js'
        }
      },
      scripts: {
        files: {
          'public/js/main.min.js': 'public/js/main.js'
        }
      }
    },

    watch: {
      styles: {
        files: ['public/sass/**/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      scripts: {
        files: ['public/js/main.js'],
        tasks: ['uglify:scripts']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify']);
};