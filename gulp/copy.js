import gulp from 'gulp';
import safeSymlink from './safeSymlink';

let $g = require('gulp-load-plugins')();
//var frontMatter = require('gulp-front-matter');

gulp.task('copy-markdown', (done) => {

  // Symlink files
  // safeSymlink("./src/images", "./static/images");

  // Copy files.
  gulp.src(['./repos/docs/reference/*',
            './repos/docs/guides/*',
            './repos/docs/overview/*',
            './repos/specs/**/*'])
    .pipe(gulp.dest('./content/public/'));
  done();
});
