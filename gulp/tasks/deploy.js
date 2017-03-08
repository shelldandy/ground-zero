'use strict'
const gulp = require('gulp')
const ghPages = require('gulp-gh-pages')
const config = require('../config')

// This task only works on a branch name origin with master
gulp.task('deploy:ghPages', () => {
  return gulp.src(`${config.distFolder}/**/*`)
  .pipe(ghPages())
})
