'use strict';

const utils = require('../utils');
const chai = require('chai');
const expect = chai.expect;

describe('pug gulp task tests suite', function () {

  afterEach(function (done) {
    utils.runTask('clean', done);
  });

  it('Should create a an index.html', function (done) {
    utils.runTaskAndAssertFile('pug', 'index.html', './dist', done);
  });

  it('Should transpile a valid html', function (done) {
    utils.runTask('pug', function (taskErr, results) {
      if (taskErr) {
        return done(taskErr);
      } else {
        utils.files.loadHTMLIndex(function (err, $) {
          if (err) {
            return done(err);
          } else {
            const title = $('head title').text();
            const svg = $('.chochini');
            expect(title).to.equal('Ground Zero');
            expect(svg.is('svg')).to.be.true;
            done();
          }
        });
      }
    });
  });
});

describe('pug task with --prod flag on tests suite', function() {
  afterEach(function (done) {
    utils.runTask('clean', done);
  })

  it('should output minified html')
  it('should output valid html')
})
