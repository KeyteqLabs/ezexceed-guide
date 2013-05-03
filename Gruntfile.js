module.exports = function(grunt) {
    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),

        markdown: {
            docs: {
                files: 'src/*.md',
                dest: 'docs/',
                template: 'template/partial.html'
            }
        },

        connect: {
            docs: {
                options: {
                    port: 9092,
                    base: './',
                    keepalive: true
                }
            }
        },

        htmlbuild: {
            dist: {
                src: 'template/index.html',
                dest: '',
                options: {
                    beautify: true,
                    sections: {
                        views: 'docs/*.html'
                    }
                }
            }
        },

        watch: {
            docs: {
                files: 'src/*',
                tasks: ['markdown', 'htmlbuild']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-build');

    grunt.registerTask('default', ['markdown']);
};
