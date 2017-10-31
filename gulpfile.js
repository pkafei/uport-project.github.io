/*global require*/
"use strict";

////////////////////////
// Modules
////////////////////////
var gulp = require('gulp'),
  path = require('path'),
  data = require('gulp-data'),
  pug = require('gulp-pug'),
  prefix = require('gulp-autoprefixer'),
  transSass = require('jstransformer-scss'),
  babel = require('gulp-babel'),
  image = require('gulp-image'),
  jsdoc = require('gulp-jsdoc3'),
  replace = require('gulp-replace'),
  browserSync = require('browser-sync').create(),
  htmlInjector = require("bs-html-injector"),
  fs = require('fs-then-native'),
  jsdoc2md = require('jsdoc-to-markdown'),
  purgeSourcemaps = require('gulp-purge-sourcemaps'),
  strip = require('gulp-strip-comments');

////////////////////////
// DIRECTORIES
////////////////////////
var paths = {
  public: './public/',

  css: './public/css/',
  js: './public/js/',
  img: './public/img/',

  es6: './src/js/',
  images: './src/images/',
  data: './src/_data/',
  partials: './src/partials/',

  nodeMods: './node_modules/'
};

////////////////////////
// HTML/CSS Hot Inject
////////////////////////
gulp.task('pug', () => {
  return gulp.src('./src/*.pug')
    .pipe(
      data(() => require(paths.data + 'data.json')
    ))
    .pipe(
      pug({
        filters: {
          "sass": (text, options) => {
            return (
              '<style>' +
                transSass.render(text).body  +
              '</style>'
            )
          }
        }
      })
    // .pipe(
    //   prefix(
    //     ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
    //     { cascade: true }))
    )
    .on('error', (err) => {
      process.stderr.write(err.message + '\n');
      this.emit('end');
    })
    .pipe(purgeSourcemaps())
    // .pipe(strip())
    .pipe(gulp.dest(paths.public));
});

gulp.task('browser-sync', ['pug'], () => {
  browserSync.use(htmlInjector, {
    files: "public/index.html"
  });
  browserSync.init({
    server: {
      baseDir: paths.public,
      // routes: {
      //   "/portal": "portal.html",
      //   "/guides": "guides.html",
      //   "/apidocs": "apidocs.html",
      //   "/myapps": "myapps.html",
      //   "/gitter": "gitter.html",
      // }
    },
    open: false
  });
});

////////////////////////
// IMAGES
////////////////////////
gulp.task('images', () => {
  return gulp.src(paths.images + '*')
    .pipe(image())
    .pipe(gulp.dest(paths.img));
});

////////////////////////
// DOCS
////////////////////////
gulp.task('docs', () => {
  var filesConnectArray = [
    paths.nodeMods + 'uport-connect/src/Connect.js',
    paths.nodeMods + 'uport-connect/src/ConnectCore.js'
  ]
  var filesJSArray = [
    // paths.nodeMods + 'uport/src/JWT.js',
    paths.nodeMods + 'uport/src/Credentials.js',
    paths.nodeMods + 'uport/src/SimpleSigner.js'
  ]

  var optionsBP = {
    "no-gfm": true,
    "separators": true
  }

  var optionsConnect = Object.create(optionsBP)
  var optionsJS = Object.create(optionsBP)
  optionsConnect.files = filesConnectArray
  optionsJS.files = filesJSArray

  jsdoc2md.render(optionsConnect)
          .then((output) => {
            fs.writeFile(
              paths.partials + 'docs/uport-connect-docs.md',
              output
            )
  })

  jsdoc2md.render(optionsJS)
          .then((output) => {
            fs.writeFile(
              paths.partials + 'docs/uport-js-docs.md',
              output
            )
  })
})

////////////////////////
// JS Compiler
////////////////////////
gulp.task('es6', () => {
  return gulp.src(paths.es6 + '*')
    .pipe(purgeSourcemaps())
    .pipe(strip())
    .pipe(gulp.dest(paths.js));
});

////////////////////////
// JS Reloader
////////////////////////
gulp.task('bsReload', () => {
  browserSync.reload('*.html')
})

////////////////////////
// WATCH
////////////////////////
gulp.task('watch', () => {
  gulp.watch('./src/**/*.pug',['pug']);
  gulp.watch('./src/js/*.js', ['es6', 'bsReload']);
  gulp.watch('./src/**/*.md', ['pug']);
});

////////////////////////
// TASK MAPPING
////////////////////////
gulp.task('docs', ['docs']);
gulp.task('build', ['pug','docs']);
gulp.task("default", ['browser-sync', 'watch'], () => { });
