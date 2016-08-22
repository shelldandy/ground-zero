'use strict';
const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins');
const $             = plugins();
const config        = require('../config');


gulp.task('assets', done => {
  return gulp.src(config.assets)
  .pipe( gulp.dest( `${config.distFolder}/assets/misc` ) );
  done();
});
