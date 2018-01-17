module.exports = (grunt) => {
    grunt.initConfig({
        sass: {
            development: {
                options: {
                },
                files: {
                    'src/scss/Styles.css': 'src/scss/style.scss'
                }
            },
            production: {
                options: {
                },
                files: {
                    'src/scss/Style.css' : 'src/scss/style.scss'
                }
            }
        },
        watch: {
            files: ['<%- sass.files %>'],
            tasks: ['sass']
        }
    })

    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.registerTask('default', ['sass'])
    grunt.registerTask('heroku:production', 'sass')
}