'use strict';

const spawn = require('child_process').spawn;

const execOptions = {
  stdio: 'inherit',
};

module.exports = function (taskName, done) {
  let args = process.env.PRODUCTION_TEST ? [taskName, '--prod'] : [taskName];
  const task = spawn('gulp', args, execOptions);
  task.on('error', done);
  task.on('exit', done);
}
