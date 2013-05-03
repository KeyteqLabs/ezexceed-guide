module.exports = function(grunt) {
    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),

        markdown: {
            docs: {
                files: 'src/*.md',
                dest: 'docs/'
            }
        },


        connect: {
            docs: {
                options: {
                    port: 9092,
                    base: 'docs/'
                }
            }
        },

        watch: {
            docs: {
                files: 'src/*',
                tasks: ['markdown']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['markdown']);
};
