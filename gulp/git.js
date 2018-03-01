import {exec} from "child_process";
import _ from "lodash";
import fs from "fs";
import path from "path";
import gulp from 'gulp';

let repos = require("../repos");

gulp.task("git:clone", done => {
  let clones = _.map(repos, (data, name) => {
    let dest = path.join("repos", name);
    if (fs.existsSync(dest)) {
      console.log(`info: ${dest} already cloned`);
    }

    if (!data.branch){
      exec(`git clone ${data.githubURL} ${dest}`);
    } else {
      exec(`git clone -b ${data.branch} ${data.githubURL} ${dest}`);
    }
  });
});
