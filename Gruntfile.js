module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false,
                sourceComments: false
            },
            development: {
                options: {
                    outputStyle: 'nested',
                },
                files: {
                    'dist/select2-flat-theme.css': 'src/sass/layout.scss'
                }
            },
            production: {
                options: {
                    outputStyle: 'compressed',
                },
                files: {
                    'dist/select2-flat-theme.min.css': 'src/sass/layout.scss'
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["src/less"]
                },
                files: {
                    "dist/select2-flat-theme.css": "src/less/layout.less"
                }
            },
            production: {
                options: {
                    paths: ["src/less"],
                    compress : true
                },
                files: {
                    "dist/select2-flat-theme.min.css": "src/less/layout.less"
                }
            }
        },
        watch: {
            sass: {
                files: 'src/sass/**/*.scss',
                tasks: ['sass']
            },
            less: {
                files: 'src/less/**/*.less',
                tasks: ['less']
            }

        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    //Sass Task
    grunt.registerTask('sass-Dev', ['sass:development']);
    grunt.registerTask('sass-Build', ['sass:production']);

    //Less Task
    grunt.registerTask('less-Dev', ['less:development']);
    grunt.registerTask('less-Build', ['less:production']);

};