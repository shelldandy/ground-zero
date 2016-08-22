'use strict';
const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins');
const $             = plugins();
const config        = require('../config');
const onError       = require('./error');

gulp.task('fonts', done => {
  return gulp.src(config.fonts)
  .pipe( $.plumber( {errorHandler : onError} ) )
  .pipe( $.cssfont64() )
  .pipe( $.concat('fonts.css') )
  .pipe( gulp.dest(`${config.distFolder}/assets/stylesheets`) );

  done();

});
