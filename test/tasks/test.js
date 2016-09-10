'use strict';

const runTask = require('../utils/run-task');

describe('test gulp task', function () {
  it('Should run test task', function (done) {
    runTask('test', done);
  });
});
