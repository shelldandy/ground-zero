'use strict';
const gulp          = require('gulp')
const onError       = require('./error')
const plugins       = require('gulp-load-plugins')
const $             = plugins()
const config        = require('../config')


gulp.task('assets', done => {
  return gulp.src(config.assets)
  .pipe( $.plumber({errorHandler: onError}))
  .pipe( gulp.dest( `${config.distFolder}/assets/` ) )
  done()
})
