'use strict';

const spawn = require('child_process').spawn;

const execOptions = {
  stdio: 'inherit',
};

module.exports = function (taskName, done) {
  const task = spawn('gulp', [taskName], execOptions);
  task.on('error', done);
  task.on('exit', done);
}
