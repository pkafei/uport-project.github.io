/*global require*/
"use strict";

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
  jsdoc2md = require('jsdoc-to-markdown');

/*
 * Directories here
 */
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

gulp.task('pug', () => {
  // return gulp.src('./src/partials/tabs/tools.pug')
  return gulp.src('./src/*.pug')
    .pipe(
      data((file) => {
        return require(
          paths.data +
          path.basename(file.path) +
          '.json');
    }))
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
    .pipe(gulp.dest(paths.public));
});

/**
 * Recompile .pug files and live reload the browser
 */
gulp.task('rebuild', ['pug','es6'], () => { });

/**
 * Wait for pug and sass tasks, then launch the browser-sync Server
 */
gulp.task('browser-sync', ['pug', 'es6'], () => {
  browserSync.use(htmlInjector, {
    files: "public/index.html"
  });
  browserSync.init({
    server: { baseDir: paths.public },
    open: false,
    notify: false
  });
});

// Compile ES6 js files to ES2015 and copy over
gulp.task('es6', () => {
  return gulp.src(paths.es6 + '*.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest(paths.js));
});

// Optimize and copy CSS over
gulp.task('image', () => {
  return gulp.src(paths.images + '*')
    .pipe(image())
    .pipe(gulp.dest(paths.img));
});

gulp.task('jsdocs', () => {

  var filesArray = [
    paths.nodeMods + 'uport-connect/src/Connect.js',
    paths.nodeMods + 'uport-connect/src/ConnectCore.js' ]

  var options = {
    "no-gfm": true,
    "separators": true,
    files: filesArray
  }

  return jsdoc2md.render(options)
    .then(output => {
      fs.writeFile(paths.partials + 'docs/uport-connect-api.md', output)
    })
})

// gulp.task('doc', (cb) => {
//   var config = require('./jsdoc.json');
//   gulp.src([
//     paths.nodeMods + 'uport-connect/src/**/**/*.js',
//     paths.nodeMods + 'uport-lite/READEME.md',
//     paths.nodeMods + 'uport-registry/READEME.md',
//     paths.nodeMods + 'uport/READEME.md'
//   ], {read: false})
//   .pipe(jsdoc(config, cb));
// });

/**
 * Watch pug/es6 files for changes & recompile
 * Watch .pug files run pug-rebuild then reload BrowserSync
 */
gulp.task('watch', () => {
  gulp.watch('./src/**/*.pug', ['rebuild']);
  gulp.watch('./src/**/*.js', ['rebuild']);
});
gulp.task('build', ['pug', 'es6']);
gulp.task("default", ['browser-sync', 'watch'], () => { });
