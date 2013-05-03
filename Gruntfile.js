module.exports = function(grunt) {
    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),

        markdown: {
            docs: {
                files: 'src/*.md',
                dest: 'docs/'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-markdown');
    grunt.registerTask('default', ['markdown']);
};
