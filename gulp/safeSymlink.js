import fs from 'fs';

// safeSymlink synchronously creates a symlink to src if there is no existing
// file or symlink at dest
module.exports = function(src, dest) {
  try {
    fs.lstatSync(dest);
  } catch(e) {
    console.log(`*************: ${src} *****************  ${dest}`);
    fs.symlinkSync(src,dest);
  }
};
