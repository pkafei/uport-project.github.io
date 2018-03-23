require('babel-register')
import fs from 'fs';
import gulp from 'gulp';
import path from 'path';
import _ from 'lodash';
import safeSymlink from './gulp/safeSymlink';

let argv = require('minimist')(process.argv.slice(2));
let $g = require('gulp-load-plugins')();
//var frontMatter = require('gulp-front-matter');

if (argv.pathPrefix && argv.pathPrefix[0] !== '/') {
  throw new Error('The --pathPrefix argument must start with a "/"');
}
const PATH_PREFIX = argv.pathPrefix || '';

import "./gulp/git";

gulp.task('copy-files', done => {

  // Symlink files
  // safeSymlink("./src/images", "./static/images");

  // Copy files.
  gulp.src(['./repos/docs/reference/*',
            './repos/docs/guides/*',
            './repos/docs/overview/*',
            './repos/specs/**/*'])
    .pipe(gulp.dest('./content/public/'));

});
