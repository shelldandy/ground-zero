'use strict';

const utils = require('../utils');
const chai = require('chai');
const assert = chai.assert;

describe('imagemin gulp task tests suite', function () {

  beforeEach(function (done) {
    utils.runTask('imagemin', done);
  });

  afterEach(function (done) {
    done();
  });

  function getOriginalAndMinifiedImages(cb) {
    utils.files.fileExists('jose-alfredo.jpg', './src/images', (err, original) => {
      if (err) {
        return cb(err);
      }
      utils.files.fileExists('jose-alfredo.jpg', './dist/assets/images', (err, min) => {
        return cb(err, original||{}, min||{});
      });
    });
  }

  it('Should create images', function (done) {
    this.timeout(10000);
    utils.files.fileExists('jose-alfredo.jpg', './dist/assets/images', done);
  });

  it('Should minify images size', function (done) {
    this.timeout(10000);
    let original, minified;
    getOriginalAndMinifiedImages((err, original, minified) => {
      assert(minified.size < original.size, 'File has been minified, but José Alfredo won\'t');
      done(err);
    });
  });
});
