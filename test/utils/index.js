'use strict';

const files = require('./file-asserts');
const runTask = require('./run-task');

const runTaskAndAssertFile = (task, fileName, cwd, cb) => {
  runTask(task, function (taskErr) {
    if(taskErr) {
      return cb(taskErr);
    } else {
      files.fileExists(fileName, cwd, cb);
    }
  });
}

module.exports = {
  files,
  runTask,
  runTaskAndAssertFile,
};
