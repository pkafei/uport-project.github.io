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
  // safeSymlink("../repos/docs/reference", "content/lessons/reference");
  // safeSymlink("../repos/docs/guides", "content/lessons/guides");
  // safeSymlink("../repos/docs/overview", "content/lessons/overview");
  // gulp.src("./repos/specs/*").pipe($g.sym(repoToSrc, {force: true, relative: true}));

  gulp.src(['./repos/docs/reference/*', './repos/docs/guides/*', './repos/docs/overview/*', './repos/specs/*.md', './repos/specs/**/*.md'])
    .pipe(gulp.dest('./content/lessons/'));

});

// function repoToSrc(file) {
//   let project = file.relative.split(path.sep)[0];
//   return path.join("content/lessons/", project);
// }

// gulp.task('docs', () => {
//   var filesConnectArray = [
//     paths.nodeMods + 'uport-connect/src/Connect.js',
//     paths.nodeMods + 'uport-connect/src/ConnectCore.js'
//   ]
//   var filesJSArray = [
//     // paths.nodeMods + 'uport/src/JWT.js',
//     paths.nodeMods + 'uport/src/Credentials.js',
//     paths.nodeMods + 'uport/src/SimpleSigner.js'
//   ]

//   var optionsBP = {
//     "no-gfm": true,
//     "separators": true
//   }

//   var optionsConnect = Object.create(optionsBP)
//   var optionsJS = Object.create(optionsBP)
//   optionsConnect.files = filesConnectArray
//   optionsJS.files = filesJSArray

//   jsdoc2md.render(optionsConnect)
//     .then((output) => {
//       fs.writeFile(
//         paths.partials + 'docs/uport-connect-docs.md',
//         output
//       )
//     })

//   jsdoc2md.render(optionsJS)
//     .then((output) => {
//       fs.writeFile(
//         paths.partials + 'docs/uport-js-docs.md',
//         output
//       )
//     })
// })
