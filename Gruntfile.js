module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus: {
            compile: {
                options: {
                    compress: false
                },
                files: {
                    'src/css/style.css': ['src/components/*/*.styl', 'src/components/*/*/*.styl']
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: {
                    'public/js/scripts.min.js': ['src/components/*/*/*.js', 'src/components/*/*.js']
                }
            },
            my_target_2: {
                options: {
                    compress: false
                },
                files: {
                    'src/js/scripts.js': ['src/components/*/*/*.js', 'src/components/*/*.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css', '!stylus.css'],
                    dest: 'public/css',
                    ext: '.min.css'
                }]
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'src/components/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'public/img/',
                    dest: 'src/components/'
                }]
            }
        },
        karma: {
            public: {
                configFile: 'test/karma.conf.js'
            }
        },
        watch: {
            // files: ['src/js/*.js', 'src/css/*.css', 'public/*.html'],
            // tasks: ['cssmin', 'uglify', 'imagemin', 'browserSync']
            //no stylus watcher
            files: ['src/components/*/*/*.js', 'src/components/*/*/*.styl', 'src/components/*/*.js', 'src/components/*/*.styl', 'public/*.html'],
            tasks: ['stylus', 'cssmin', 'uglify', 'imagemin', 'browserSync']
        },
        browserSync: {
            bsFiles: {
                src: [
                    'public/css/*',
                    'public/*.html',
                    'public/js/*.js'
                ]
            },
            options: {
                watchTask: true,
                server: './public'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'imagemin', 'browserSync', 'watch']);

};
