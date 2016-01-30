module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: false,
                sourceComments: false
            },
            staging: {
                options: {
                    outputStyle: 'nested',
                },
                files: {
                    'dist/select2-flat-theme.css': 'src/layout.scss'
                }
            },
            production: {
                options: {
                    outputStyle: 'compressed',
                },
                files: {
                    'dist/select2-flat-theme.min.css': 'src/layout.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'src/**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['sass:staging']);
    grunt.registerTask('build', ['sass:production']);

};