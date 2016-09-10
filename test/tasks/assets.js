'use strict';

const utils = require('../utils');

describe('assets gulp task tests suite', function () {

  afterEach(function (done) {
    utils.runTask('clean', done);
  });

  it('Should run assets task', function (done) {
    utils.runTaskAndAssertFile('assets', 'README.md', './dist/assets/misc', done);
  });
});
