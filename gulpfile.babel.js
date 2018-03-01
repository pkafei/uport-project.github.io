require('babel-core/register');
import fs from 'fs';
import gulp from 'gulp';
import path from 'path';
import _ from 'lodash';
import safeSymlink from './gulp/safeSymlink';

let argv = require('minimist')(process.argv.slice(2));
let $g = require('gulp-load-plugins')();

if (argv.pathPrefix && argv.pathPrefix[0] !== '/') {
  throw new Error('The --pathPrefix argument must start with a "/"');
}
const PATH_PREFIX = argv.pathPrefix || '';

// add the git related gulp tasks
import "./gulp/git";

gulp.task('src:symlink-repos', ['git:clone'], () => {
  // symlink the landing pages/custom content from the docs repo for each section
  safeSymlink("../repos/docs/reference", "content/lessons/reference");
  safeSymlink("../repos/docs/guides", "content/lessons/guides");
  safeSymlink("../repos/docs/overview", "content/lessons/overview");
  gulp.src("./repos/specs/*").pipe($g.sym(repoToSrc, {force: true, relative: true}));
});

function repoToSrc(file) {
  let project = file.relative.split(path.sep)[0];
  return path.join("content/lessons/", project);
}
