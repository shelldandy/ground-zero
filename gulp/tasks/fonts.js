'use strict';
const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins');
const $             = plugins();
const config        = require('../config');
const onError       = require('./error');

gulp.task('fonts', done => {
  return gulp.src('config.fonts')
  .pipe( $.plumber( {errorHandler : onError} ) )
  .pipe( $.cache( $.cssfont64() ) )
  .pipe( $.concat('fonts.css') )
  .pipe( gulp.dest(`${config.exportPath}/assets/stylesheets`) );

  done();

});
