'use strict';

const fs = require('fs');
const $ = require('cheerio');

function getPath(fileName, cwd) {
  return cwd ? `${cwd}/${fileName}` : fileName;
}

module.exports.fileExists = (fileName, cwd, cb) => {
  fs.stat(getPath(fileName,cwd), cb);
};

module.exports.openFile = (fileName, cwd, cb) => {
  fs.readFile(getPath(fileName,cwd), cb);
}

module.exports.loadHTMLIndex = (cb) => {
  module.exports.openFile('index.html', './dist', function (err, html) {
    if (err) {
      return cb(err);
    } else {
      return cb(null, $.load(html.toString()));
    }
  });
}
