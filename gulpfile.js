/*global require*/
"use strict";

var gulp = require('gulp'),
  path = require('path'),
  data = require('gulp-data'),
  pug = require('gulp-pug'),
  prefix = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  image = require('gulp-image'),
  jsdoc = require('gulp-jsdoc3'),
  replace = require('gulp-replace'),
  // markdownIt = require('gulp-markdown-it')
  browserSync = require('browser-sync');

/*
 * Directories here
 */
var paths = {
  public: './public/',
  sass: './src/sass/',
  css: './public/css/',
  es6: './src/js/',
  images: './src/images/',
  img: './public/img/',
  js: './public/js/',
  data: './src/_data/'
};

/**
 * Compile .pug files and pass in data from json file
 * matching file name. index.pug - index.pug.json
 */
gulp.task('pug', function () {
  return gulp.src('./src/*.pug')
    .pipe(data(function (file) {
      return require(paths.data + path.basename(file.path) + '.json');
    }))
    .pipe(pug())
    .on('error', function (err) {
      process.stderr.write(err.message + '\n');
      this.emit('end');
    })
    .pipe(gulp.dest(paths.public));
});

/**
 * Recompile .pug files and live reload the browser
 */
gulp.task('rebuild', ['pug'], function () {
  browserSync.reload();
});

/**
 * Wait for pug and sass tasks, then launch the browser-sync Server
 */
gulp.task('browser-sync', ['sass', 'pug', 'es6'], function () {
  browserSync({
    server: {
      baseDir: paths.public
    },
    notify: false
  });
});

/**
 * Compile .scss files into public css directory With autoprefixer no
 * need for vendor prefixes then live reload the browser.
 */
gulp.task('sass', function () {
  return gulp.src(paths.sass + '**/**.scss')
    .pipe(sass({
      includePaths: [paths.sass],
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.reload({
      stream: true
    }));
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

gulp.task('doc', function (cb) {
  var config = require('./jsdoc.json');
  gulp.src([
    './node_modules/uport-connect/src/**/**/*.js',
    './node_modules/uport-lite/READEME.md',
    './node_modules/uport-registry/READEME.md',
    './node_modules/uport/READEME.md'
  ], {read: false})
  .pipe(jsdoc(config, cb));
});

gulp.task('jsdocs', function () {
  const fs = require('fs-then-native')
  const jsdoc2md = require('jsdoc-to-markdown')
  return jsdoc2md.render({files: [
      './node_modules/uport-connect/src/Connect.js',
      './node_modules/uport-connect/src/ConnectCore.js',
      './node_modules/uport-connect/src/uportSubprovider.js']})
    .then(output => fs.writeFile('./src/_partials/uport-connect-api.md', output))
})

gulp.task('codeblocks', function(){
  gulp.src(['./src/_partials/*.md'])
    .pipe(replace('<code>', '`'))
    .pipe(replace('</code>', '`'))
    .pipe(gulp.dest('./src/_partials/'));
});

/**
 * Watch scss files for changes & recompile
 * Watch .pug files run pug-rebuild then reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(paths.sass + '**/*.scss', ['sass']);
  gulp.watch('./src/**/*.pug', ['rebuild']);
  gulp.watch('./src/**/*.js', ['rebuild']);
  gulp.watch('./src/images/*.**', ['rebuild']);
});

// Build task compile sass and pug.
gulp.task('build', ['sass', 'pug', 'es6', 'image']);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', ['browser-sync', 'watch']);
