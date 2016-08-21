'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins');
const $ = plugins();

const onError = error => {
  $.notify.onError('ERROR: <%- error.plugin %>');
  $.util.beep();
  $.util.log('======= ERROR. ========\n');
  $.util.log(error);
}

module.exports = onError;
