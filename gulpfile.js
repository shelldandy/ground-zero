'use strict';

const gulp              = require('gulp');
const browserSync       = require('browser-sync');
const requireDir        = require('require-dir');
const config            = require('./gulp/config');

// Let's require all the tasks inside gulp/tasks
requireDir('./gulp/tasks', {
  recurse : true
});
