module.exports = function (grunt) {

    var buildDate = new Date().getTime();
    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        clean: {
            release: ['dist/']
        },
        copy: {
            main: {
                files: [
                    { expand: true, src: ['app.js'], dest: 'dist/', filter: 'isFile' },
                    { expand: true, src: ['Dockerfile'], dest: 'dist/', filter: 'isFile' },
                    { expand: true, src: ['.dockerignore'], dest: 'dist/', filter: 'isFile' },
                    { expand: true, src: ['package.json'], dest: 'dist/', filter: 'isFile' },
                    { expand: true, src: ['package-lock.json'], dest: 'dist/', filter: 'isFile' },
                ],
            }
        },

        exec: {
            build: {
                command: 'npm run build'
            }
        }

    });
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-rename');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'exec', 'copy']);



};