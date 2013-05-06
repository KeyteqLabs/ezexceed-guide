module.exports = function(grunt) {
    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),

        markdown: {
            docs: {
                files: 'src/*.md',
                dest: 'docs/',
                template: 'template/partial.html',
                options: {
                    gfm: true
                }
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
                        toc: 'docs/toc.html',
                        views: 'docs/[0-9]*-*.html'
                    }
                }
            }
        },

        watch: {
            docs: {
                files: 'src/*',
                tasks: ['default']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-build');

    grunt.registerTask('default', ['markdown', 'htmlbuild']);
};
