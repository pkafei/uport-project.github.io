import {exec} from "child_process";
import gulp from 'gulp';

let watch = require('gulp-watch');

gulp.task('watch:repos', function() {
  return watch(["./repos/**/*.*"], function() {
    gulp.start('copy-markdown');
  });
});

// function() {
//   //gulp.start('copy-files');
//   gulp.run(['copy-files']);
// }
