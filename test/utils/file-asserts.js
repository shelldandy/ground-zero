'use strict';

const fs = require('fs');

module.exports.fileExists = (fileName, cwd, cb) => {
  let path = cwd ? `${cwd}/${fileName}` : fileName;
  fs.stat(path, cb);
};
