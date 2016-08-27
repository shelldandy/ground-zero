'use strict';
const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins');
const $             = plugins();
const config        = require('../config');

gulp.task('imagemin', done => {
  return gulp.src('./src/images/**/*')
  .pipe( $.imagemin({
    progressive : true,
    multipass : true,
    svgoPlugins : [{
      removeViewBox : false,
      removeDimensions : true
    }]
  }) )
  .pipe( gulp.dest(`${config.distFolder}/assets/images`) );
  done();
});
