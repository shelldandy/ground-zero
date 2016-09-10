'use strict';

const utils = require('../utils');
const chai = require('chai');
const expect = chai.expect;

describe('pug gulp task tests suite', function () {

  beforeEach(function (done) {
    utils.runTask('pug', done);
  });

  afterEach(function (done) {
    utils.runTask('clean', done);
    process.env.PRODUCTION_TEST = false;
  });

  it('Should create a an index.html', function (done) {
    utils.files.fileExists('index.html', './dist', done);
  });

  it('Should transpile a valid html', function (done) {
    utils.files.loadHTMLIndex(function (err, $) {
      if (err) {
        return done(err);
      } else {
        let title = $('head title').text();
        let svg = $('.chochini');
        expect(title).to.equal('Ground Zero');
        expect(svg.is('svg')).to.be.true;
        done();
      }
    });
  });

  describe('pug tasks with --prod flag on tests suite', function() {
    beforeEach(function () {
      process.env.PRODUCTION_TEST = true;
    });
    
    it('should output minified html');
    it('should output valid html');
  });
});
