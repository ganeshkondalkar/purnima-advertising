module.exports = function( grunt ){

    const sass = require('node-sass');
    const serveStatic = require('serve-static');

    const PORT = {
        DEV: 1985,
        DEV_LIVERELOAD: 1984,
        PROD: 1986,
        DEV_LIVERELOAD: 1987
    };

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        assets: grunt.file.readJSON('project-assets.json'),

        NODE_MODULES: "node_modules",
        BASE_FOLDER: "src",
        DIST_ENVIRONMENT: "build",

        BANNER_TEXT: 'Project: <%= pkg.name %>. Created by: <%= pkg.author %>. Version: <%= pkg.version %>.\n' +
            'This project is valid for the duration: <%= pkg.projectDetails.startDate %> - <%= pkg.projectDetails.endDate %>.',

        clean: {
            dev: ["<%= BASE_FOLDER %>/js/*.js", "<%= BASE_FOLDER %>/css"],
            dist: ["<%= DIST_ENVIRONMENT %>"]
        },

        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= BANNER_TEXT %> */\n',
                separator: ";"
            },
            // 3RD PARTY PLUGINS.
            devVendors: {
                src: "<%= assets.scripts.lib %>",
                dest: "<%= BASE_FOLDER %>/js/vendor.js"
            },
            // APP SPECIFIC MODULES.
            devModules: {
                src: ["<%= BASE_FOLDER %>/js/modules/*.js"],
                dest: "<%= BASE_FOLDER %>/js/main.js"
            }
        },

        sass: {

            options: {
                implementation: sass,
                outputStyle: 'compressed',
                sourceMap: false
            },

            dev: {
                options: {
                    /* Enables the line number and file where a selector is defined to be emitted into the compiled CSS as a comment. */
                    sourceComments: true,
                    outputStyle: 'expanded'
                },
                files: {
                    '<%= BASE_FOLDER %>/css/lib/vendor.css': '<%= BASE_FOLDER %>/sass/lib/vendor.scss',
                    '<%= BASE_FOLDER %>/css/main.css': '<%= BASE_FOLDER %>/sass/main.scss'
                }
            },

            dist: {
                files: {
                    '<%= DIST_ENVIRONMENT %>/css/lib/vendor.css': '<%= BASE_FOLDER %>/sass/lib/vendor.scss',
                    '<%= DIST_ENVIRONMENT %>/css/main.css': '<%= BASE_FOLDER %>/sass/main.scss'
                }
            }

        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    "<%= DIST_ENVIRONMENT%>/index.html" : "<%= BASE_FOLDER%>/index.html"
                }
            }
        },

        uglify: {
            options:{
                banner: "/*! <%= BANNER_TEXT %> */",
                compress: {
                    drop_console: true
                },
                sourceMap: true,
                preserveComments: false
            },
            dist: {
                files: {
                    "<%= DIST_ENVIRONMENT %>/js/main.js" : [
                        "<%= BASE_FOLDER %>/js/main.js"
                    ],
                    "<%= DIST_ENVIRONMENT %>/js/vendor.js" : [
                        "<%= BASE_FOLDER %>/js/vendor.js"
                    ]
                }
            }
        },

        copy: {
            fonts: {
                files: [
                    {
                        expand: true,
                        filter: "isFile",
                        flatten: true,
                        src: "<%= assets.fonts.fontawesome %>",
                        dest: "<%= BASE_FOLDER %>/fonts/fontawesome/"
                    }
                ]
            },
            imagesNFonts: {
                files: [
                    {
                        expand: true,
                        cwd: "<%= BASE_FOLDER %>/",
                        filter: "isFile",
                        src: "img/**",
                        dest: "<%= DIST_ENVIRONMENT %>/"
                    },
                    {
                        expand: true,
                        cwd: "<%= BASE_FOLDER %>/",
                        filter: "isFile",
                        src: "fonts/**",
                        dest: "<%= DIST_ENVIRONMENT %>/"
                    }
                ]
            }
        },

        watch: {
            configFiles: {
                files: ["Gruntfile.js", "project-assets.json"],
                options: { reload: true },
                tasks: ["concat:devVendors", "concat:devModules"]
            },
            options: {
                debounceDelay: 1000,
                // livereload: 35729
                livereload: true
                // livereload: 1337
                /*livereload: {
                    host: 'localhost',
                    port: PORT.DEV_LIVERELOAD
                }*/
            },
            html: {
                files: ['<%= BASE_FOLDER %>/**/*.html'],
                tasks: ["htmlmin:dist"]
            },
            css: {
                files: ['<%= BASE_FOLDER %>/sass/**'],
                tasks: ["sass:dev"]
            },
            js: {
                files: ['<%= BASE_FOLDER %>/js/modules/*.js'],
                tasks: ["concat:devVendors", "concat:devModules"]
            }
        },

        connect: {
            dev: {
                options: {
                    hostname: "localhost",
                    port: PORT.DEV,
                    base: "<%= BASE_FOLDER %>",
                    livereload: true,
                    useAvailablePort: true
                }
            },
            dist: {
                options: {
                    hostname: "localhost",
                    port: PORT.PROD,
                    base: ["<%= DIST_ENVIRONMENT%>"],
                    livereload: true,
                    useAvailablePort: true
                }
            }
        },

        open: {
            dev: { path: "http://localhost:1985/" },
            dist: { path: "http://localhost:1986/" }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    // Generate DEVELOPMENT CONTENT
    grunt.registerTask("dev", "Run DEVELOPMENT Process Tasks", function(){
        var tasks = [
            "clean:dev",
            "sass:dev",
            "copy:fonts",
            "concat:devVendors", "concat:devModules",
            "open:dev",
            "connect:dev",
            "watch"
        ];

        // always use force when watching
        // grunt.option('force', true);
        grunt.task.run(tasks);
    });

    // Generate PRODUCTION CONTENT
    grunt.registerTask("build", "Run BUILD Process Tasks", function(){
        var tasks = [
            "clean:dist",
            "htmlmin:dist",
            "sass:dist",
            "uglify:dist",
            "copy:imagesNFonts",
            "open:dist",
            "connect:dist",
            "watch"
        ];

        // always use force when watching
        // grunt.option('force', true);
        grunt.task.run(tasks);
    });

}
