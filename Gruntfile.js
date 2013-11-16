var fs = require('fs');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    clean: ["dest/getcomposer.org_doc_jp/*"],
    uglify: {
      dist: {
        src: ['src/js/modernizr-2.0.6.min.js'],
        dest: "dest/getcomposer.org_doc_jp/js/scripts.min.js"
      }
    },
    cssmin: {
      dist: {
        src: ["src/css/style.css"],
        dest: "dest/getcomposer.org_doc_jp/css/styles.min.css"
      }
    },

    copy: {
      dist: {
        files: [
          { expand: true, cwd: "src/", src: ['index.html', "doc/index.html", 'favicon.ico', 'img/*'], dest: 'dest/getcomposer.org_doc_jp/', filter: 'isFile'}
        ]
      }
    },
    
    markdown: {
      dist: {
        files: [
          {expand: true, cwd: "src/", src: ["doc/**/*.md"], dest: "dest/getcomposer.org_doc_jp/", ext: ".html", filter: 'isFile'}
        ],
        options: {
          template: "src/templates/layout.html",
          markdownOptions: {
            gfm: true
          }
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 12345,
          hostname: "*",
          base: "dest"
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      uglify: {
        files: "<%= uglify.dist.src $>",
        tasks: "uglify:dist"
      },
      cssmin: {
        files: "<%= cssmin.dist.src $>",
        tasks: "cssmin:dist"
      },
      copy: {
        files: ["src/index.html", "src/doc/index.html"],
        tasks: "copy:dist"
      },
      markdown: {
        files: ["src/doc/**/*.md", "src/templates/layout.html"],
        tasks: "markdown:dist"
      }
    }

  });

  // Load plugins and tasks.
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-markdown");

  // Register custom tasks.
  grunt.registerTask("build", ["clean", "uglify", "markdown", "cssmin", "copy"]);
  grunt.registerTask("default", ["build", "connect", "watch"]);
  

}

