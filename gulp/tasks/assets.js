'use strict'
const gulp = require('gulp')
const config = require('../config')

gulp.task('assets', () => {
  return gulp.src(config.assets)
  .pipe(gulp.dest(`${config.distFolder}/assets/misc`))
})
