'use strict'
gulp      = require 'gulp'
ghPages   = require 'gulp-gh-pages'


gulp.task 'deploy', ['production:noWatch'], ->
  gulp.src './dist/**/*'
  .pipe ghPages()
