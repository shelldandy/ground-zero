'use strict'
gulp      = require 'gulp'
ghPages   = require 'gulp-gh-pages'


gulp.task 'deploy', ['production'], ->
  gulp.src './dist/**/*'
  .pipe ghPages()
