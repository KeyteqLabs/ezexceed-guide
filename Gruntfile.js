var _ = require('underscore');
var cheerio = require('cheerio');
var eyes = require('eyes');
var S = require('string');

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
                    },
                    styles: {
                        dist: 'assets/*.css'
                    },
                    scripts: {
                        dist: 'assets/*.js'
                    }
                }
            }
        },

        watch: {
            docs: {
                files: 'src/*',
                tasks: ['default']
            }
        },

        toc: {
            'docs/toc.html': 'docs/[0-9]*-*'
        }
    });

    grunt.task.registerMultiTask('toc', 'Generate TOC', function() {
        var files = grunt.file.expand(this.data);
        var content = _.reduce(files, function(memo,file) {
            var $ = cheerio.load(grunt.file.read(file));
            var nodes = $('a[name]');
            var title = file.trim().replace(/docs\/[0-9]*-(.*).html/, '$1');
            var html = '<h2>' + S(title).capitalize().s + '</h2>';
            html += '<ul>';
            html += nodes.map(function(i, elem) {
                var node = $(this);
                var title = node.parent().text().trim();
                return '<li><a href="#' + node.attr('name') + '">' + title + '</a></li>';
            }).join('');
            html += '</ul>';
            return memo + html;
        }, '');
        grunt.file.write(this.target, content);
    });
    
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-build');

    grunt.registerTask('default', ['markdown', 'toc', 'htmlbuild']);
};
